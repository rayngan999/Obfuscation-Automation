(function(window) {
  "use strict";

  const zbo_debug = (new URLSearchParams(window.location.search)).has('zbo_debug')
  const zbo_debug_value = parseInt((new URLSearchParams(window.location.search)).get('zbo_debug')) || 0
  // const zbo_debug = true
  // const zbo_debug_value = 1

  var zbo = {
    tags: [
    ],
    executedTagIDs: [],
    vars: {
    },
    triggers: {
    },
    _events: [],
    is_debug: zbo_debug,
    debug_value: zbo_debug_value,
    interId: null,

    // Initialzie plugin
    init: function() {
      let mustRegisterAfterAll = true;
      for (let event in window._zbo) {
        if (event != "register") {
          mustRegisterAfterAll = false;
          this._events[event] = this._events[event] || []

          if (typeof window._zbo[event] === 'object') {
            for (let data of window._zbo[event]) {
              this._events[event].push(data || {})
            }
          } else {
            this._events[event].push(window._zbo[event] || {})
          }
        }
      }

      if (mustRegisterAfterAll) { this.register("afterAll") }
    },

    exec: function() {
      clearInterval(this.interId)
      if (this._events.length) this.debug(0, "Executing events...")
      for (let event in this._events) { // loop on registered events through zbo.register(event [, datalayer])
        // prievously it was (with a magic `|| 1`?): var len = this._events[event].length || 1
        var len = this._events[event].length
        for (let i = 0; i < len; i++) {
          let datalayer = this._events[event][i] || {}
          this.debug(0, "> Current event type", event, "with datalayer", datalayer)
          for (let idx in this.tags) { // loop on tags
            let tag = this.tags[idx] // get
            if (tag.shouldSkip || tag.dependsOn != undefined && this.executedTagIDs.indexOf(tag.dependsOn) == -1) {
              this.debug(1, "-> Skipping tag", tag.id, "as it has already been executed once")
              continue
            }
            let skipTag = true
            let tagDelay = -1
            this.debug(1, "-> Processing event for tag", tag.id)
            this.debug(1, "--> Checking Triggers...")
            if (tag.triggerIds != undefined) {
              for (let id of tag.triggerIds) {
                var [ok, delay] = this._checkTrigger(id, event, datalayer, true)
                if (ok) {
                  skipTag = false
                  tagDelay = (delay != null && tagDelay == -1) || (delay < tagDelay) ? delay : tagDelay // get smallest delay from matching triggers
                }
              }
            }
            if (skipTag) {
              this.debug(1, ">> Triggers didn't match. Skipping tag! <<")
              continue
            }
            this.debug(1, "--> Checking ExceptionTriggers...")
            if (tag.triggerExceptionIds != undefined) {
              for (let id of tag.triggerExceptionIds) {
                var [ok, delay] = this._checkTrigger(id, event, datalayer, false)
                if (!ok) {
                  skipTag = true
                  break
                }
              }
            }
            if (skipTag) {
              this.debug(1, ">> ExceptionTriggers match. Skipping tag! <<")
              continue
            }
            this.debug(1, "--> Preparing execution of tag", tag.id)
            this.execTags(event, tag, tagDelay, datalayer)
            if (this.executedTagIDs.indexOf(tag.id) == -1) this.executedTagIDs.push(tag.id)
            if (tag.onlyOnce && !tag.shouldSkip) tag.shouldSkip = true
          }
        }
        delete this._events[event]
      }
      this.interId = setInterval(this.exec.bind(this), 500)
    },

    execTags: function(event, tag, delay, datalayer) {
      let values = []
      for (let value of tag.values) {
        values.push({code: this._render(event, value.code, datalayer), async: value.async, src: value.withSrc})
      }
      this.debug(1, "---> Tag values are:", values)
      if (delay != null && delay != 0) {
        this.debug(1, "---> Tag", tag.id, "will be executed with a delay of", delay)
        return this.timers(tag.type, values, delay)
      }
      this.debug(1, "---> Executing tag", tag.id)
      this.appendNodes(tag.type, values)
    },

    timers: function(type, values, delay) {
      for (let value in values) {
        setTimeout(this.appendNode.bind(this, type, value.code, value.async), delay)
      }
    },

    appendNode: function(kind, value, async, src) {
      this.debug(1, "Appending node of type", kind+"(async:"+async+", src:"+src+"):\n", value)
      switch (kind) {
        case 'Custom_HTML':
          var child = document.createElement('script')
          if (async) {
            child.setAttribute('async','')
          }
          if (src) {
            child.setAttribute('src', value)
          } else {
            child.append(value)
          }
          document.body.append(child)
          break
        case 'Custom_Image':
          var child = document.createElement('img')
          child.style.display = 'none'
          child.src = value
          document.body.append(child)
          break
        default:
          console.error('[ZBO-Reactor] Unknown trigger kind', kind)
      }
    },
    appendNodes: function(kind, values) {
      for (let value of values) {
        this.appendNode(kind, value.code, value.async, value.src)
      }
    },

    register: function(event, data) {
      this.debug(0, "Registering event", event, "with datalayer", data || {})
      this._events[event] = this._events[event] || []
      this._events[event].push(data || {})
    },

    _render: function(event, template, datalayer) {
      for (let id in this.vars) {
        let varName = this.vars[id].name
        let val = this.vars[id].value
        switch (this.vars[id].type) {
          case 'Data_Layer_Variable':
            val = datalayer[this.vars[id].value]
            break
          case 'Event':
            val = event
            break
          case 'Random':
            val = val()
            break
          default:
            val = this.vars[id].value
            break
        }
        template = template.replace(new RegExp('{{\\s*' + varName + '\\s*}}', 'g'), val)
      }
      return template
    },

    _checkTrigger: function(triggerId, event, data, expected) {
      let trigger = this.triggers[triggerId]
      if (trigger == undefined) {
        return [false, null]
      }
      this.debug(1, "Checking trigger", trigger)
      for (let cond of trigger.conditions) {
        let varCond = this.vars[cond.variableId]
        let res;
        switch (varCond.type) {
          case 'Event':
            res = this._op(cond.operator, event, cond.compareTo)
            this.debug(1, "> Condition[" + varCond.type + "] (" + event, cond.operator, cond.compareTo + ") returned", res, "expected", expected)
            if (res != expected) return [false, null]
            break
          case 'Data_Layer_Variable':
            res = this._op(cond.operator, data[varCond.value], cond.compareTo)
            this.debug(1, "> Condition[" + varCond.type + "] (" + data[varCond.value], cond.operator, cond.compareTo + ") returned", res, "expected", expected)
            if (res != expected) return [false, null]
            break
          case 'Custom_JavaScript':
          case 'Constant':
          case 'URL':
          case 'HTTP_Referrer':
          case 'URL_Path':
          case 'URL_Path_full':
            res = this._op(cond.operator, varCond.value, cond.compareTo)
            this.debug(1, "> Condition[" + varCond.type + "] (" + varCond.value, cond.operator, cond.compareTo + ") returned", res, "expected", expected)
            if (res != expected) return [false, null]
            break
          case 'Random':
            res = this._op(cond.operator, varCond.value(), cond.compareTo)
            //this.debug(1, "> Condition", cond.ID, "returned", res, "expected", expected)
            if (res != expected) return [false, null]
            break
        }
      }
      this.debug(1, "Trigger "+triggerId+" is valid")
      return [true, trigger.value ? Number(trigger.value) : 0]
    },

    _op: (op, a, b) => {
      if (a !== Number || b !== Number) {
        a = String(a)
        b = String(b)
      }
      switch (op) {
        case '=':
          return a == b
        case '!=':
          return a != b
        case 'isDefined':
          return a != undefined
        case 'contains':
          return a.indexOf(b) != -1
        case 'startsWith':
          return a.startsWith(b)
        case 'endsWith':
          return a.endsWith(b)
      }
      return false
    },

    debug: function(lvl, ...msg) {
      if (this.is_debug && lvl <= this.debug_value) console.debug("[zbo]", ...msg)
    }
  }

  if (!window._zbo || !window._zbo.init) {
    try {
      zbo.init()
      window._zbo = zbo
      setTimeout(zbo.exec.bind(zbo), 100)
    } catch (e) {}
  }
})(this)