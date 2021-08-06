;(function(global, window, document, undefined) {
  function inject() {
    const SNIPPET_DIV_ID = 'botcopy-d7lcfheammjct'
    const SNIPPET_SCRIPT_ID = 'botcopy-embedder-d7lcfheammjct'
    const SNIPPET_CLASS_NAME = 'botcopy-embedder-d7lcfheammjct-embeddable'

    // closure for global window document
    // https://gomakethings.com/keeping-your-javascript-out-of-the-global-scope-and-why-you-want-to/

    // console.log('embed start; global:', global)
    // add array index of for old browsers (IE<9)
    if (!Array.prototype.indexOf) {
      Array.prototype.indexOf = function(obj, start) {
        var i, j
        i = start || 0
        j = this.length
        while (i < j) {
          if (this[i] === obj) {
            return i
          }
          i++
        }
        return -1
      }
    }

    /**
     * detect IEEdge
     * returns version of IE/Edge or false, if browser is not a Microsoft browser
     */
    function detectIEEdgeFireFox() {
      var ua = window.navigator.userAgent
      var msie = ua.indexOf('MSIE ')
      if (msie > 0) {
        // IE 10 or older => return version number
        return {
          browser: 'ie10',
          version: parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
        }
      }
      var trident = ua.indexOf('Trident/')
      if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:')
        return {
          browser: 'ie11',
          version: parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10)
        }
      }
      var edge = ua.indexOf('Edge/')
      if (edge > 0) {
        // Edge => return version number
        return {
          browser: 'edge',
          version: parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10)
        }
      }
      const ff = ua.indexOf('Firefox/')
      if (ff > 0) {
        const rv = ua.indexOf('rv:')
        const version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10)
        if (version < 63) {
          return {
            browser: 'firefox',
            version: parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10)
          }
        }
      }
      // other browser
      return false
    }

    function start(noShadow) {
      var shadowHost = document.getElementById('botcopy-widget-root')
      var shadowRoot = shadowHost
      if (!noShadow) {
        shadowRoot = shadowHost.attachShadow({ mode: 'open' })
      }

      if (navigator.userAgent.includes('Chrome-Lighthouse')) {
        // disable for google lighthouse test
        return
      }

      // add the style tag into the head (once only)
      var styleTag = document.createElement('link')
      styleTag.rel = 'stylesheet'
      styleTag.type = 'text/css'
      styleTag.href = 'https://widget.botcopy.com/static/css/master.css'
      styleTag.media = 'all'
      shadowRoot.appendChild(styleTag)

      // add a font to the head
      var font = document.createElement('link')
      font.rel = 'stylesheet'
      font.href = 'https://fonts.googleapis.com/css?family=Open+Sans'
      font.media = 'all'
      shadowRoot.appendChild(font)

      const currentScript = window.document.getElementById(SNIPPET_SCRIPT_ID)
      const requireJSOff = !!(
        currentScript &&
        (currentScript.getAttribute('data-requireJSOff') === 'true' ||
          currentScript.getAttribute('data-requireJSOff') === '1')
      )

      function injectWithoutRequireJS() {
        var injectedScript = document.createElement('script')
        injectedScript.type = 'text/javascript'
        injectedScript.async = true
        injectedScript.src = 'https://widget.botcopy.com/static/js/master.js'
        injectedScript.dataset.cookieconsent = 'ignore' // ignore cookiebot consent
        shadowRoot.appendChild(injectedScript, embedderElement)
      }

      try {
        // add master.js script via require
        if (!requireJSOff && require !== undefined) {
          require([
            'https://widget.botcopy.com/static/js/master.js'
          ], function() {
            // console.log('!!! botcopy master loaded with require!')
          })
        } else {
          injectWithoutRequireJS()
        }
      } catch (error) {
        // console.error('Botcopy: requireJS errored:', error)
        injectWithoutRequireJS()
      }
    }

    // make a global object to store stuff in
    if (!global.Botcopy) {
      global.Botcopy = {}
    }

    // just get the embedder element by id, can also be a <div> (in portal) or a <script> for clients
    var embedderElement = document.getElementById(SNIPPET_SCRIPT_ID)

    // Create a div
    var div = document.createElement('div')
    div.id = SNIPPET_DIV_ID

    div.className = SNIPPET_CLASS_NAME
    div.innerHTML = '<div id="botcopy-widget-root"></div>'

    document.body.appendChild(div)

    const currentScript = window.document.getElementById(SNIPPET_SCRIPT_ID)
    const disableShadowDom =
      currentScript &&
      (currentScript.getAttribute('data-disableShadowDom') === 'true' ||
        currentScript.getAttribute('data-disableShadowDom') === '1')

    const IEEdgeFirefoxResult = detectIEEdgeFireFox()
    if (IEEdgeFirefoxResult) {
      var shadyScript = document.createElement('script')
      shadyScript.type = 'text/javascript'
      shadyScript.async = false // blocking
      shadyScript.src =
        'https://cdnjs.cloudflare.com/ajax/libs/shadydom/1.1.0/shadydom.min.js'
      shadyScript.dataset.cookieconsent = 'ignore' // ignore cookiebot consent
      shadyScript.addEventListener('load', function() {
        start(disableShadowDom)
      })
      embedderElement.appendChild(shadyScript, embedderElement)
    } else {
      start(disableShadowDom)
    }
  }

  if (document.body) {
    inject()
  } else {
    // wait till body loaded, some browsers have problems when injected in the <head>
    window.addEventListener
      ? window.addEventListener('load', inject, false)
      : window.attachEvent('onload', inject)
  }
})(this, window, document)
