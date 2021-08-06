ï»¿/// <reference path="vtex.common.js" />

//Namespace.create('Vtex');
Namespace.create('Vtex.JSEvents');

Vtex.JSEvents.EventArgs = Class.create();
Vtex.JSEvents.EventArgs.prototype = {
    initialize: function () {
    }
}

Vtex.JSEvents.Listener = Class.create();
Vtex.JSEvents.Listener.prototype = {
    initialize: function (name, callback) {
        this.name = name;
        this.callback = callback;
    },

    notify: function (e) {
        /// <summary>
        /// Notifies the firing of an event.
        /// </summary>
        /// <param name="e" type="Vtex.JSEvents.EventArgs">
        /// Event arguments. This object carries the event context.
        /// </param>
        this.callback(e);
    }
}

Vtex.JSEvents.Event = Class.create();
Vtex.JSEvents.Event.prototype = {
    initialize: function (eventId) {
        this.id = eventId;
        this.listeners = new Array();
    },

    addListener: function (listener) {
        this.listeners.push(listener);
    },

    fire: function (e) {
        var listener;
        for (var i = 0; i < this.listeners.length; i++) {
            listener = this.listeners[i];
            listener.notify(e);
        }
    }
}

Vtex.JSEvents.EventDispatcher = Class.create();
Vtex.JSEvents.EventDispatcher.prototype = {
    events: new Object(),

    initialize: function () {
    },

    registerEvent: function (event) {
        this.events[event.id] = event;
    },

    addListener: function (eventId, listener) {
        var event = this.events[eventId];
        if (event != null) {
            event.addListener(listener);
        }
    },

    fireEvent: function (eventId) {
        this.fireEvent(eventId, new Vtex.JSEvents.EventArgs());
    },

    fireEvent: function (eventId, e) {
        var event = this.events[eventId];
        if (event != null) {
            event.fire(e);
        }
    }
}