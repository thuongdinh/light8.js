(function (namespace) {

    "use strict";

    var collectionUtil = light8.util.collection;

    if (light8.Event) {
        return;
    }

    /**
     * The event class of light8.
     * @class Event
     * @memberOf light8
     */
    light8.Event = fabric.util.createClass(/** @scope light8.Event.prototype */ {

        /**
         * The Object container all events and its action
         * @private
         * @type Object
         */
        _eventsContainer: {},

        /**
         * Bind a function to an event
         * @method bind
         * @param {String} eventName Event's Name
         * @param {Function} func Function do event action
         */
        bind: function (eventName, func) {
            var eventContainer = this._eventsContainer[eventName];

            // initialize an event container if not exist
            if (!eventContainer) {
                this._eventsContainer[eventName] = eventContainer = [];
            }

            // add event to event container
            eventContainer.push(func);
        },

        /**
         * Unbind a function out of an event
         * @method unbind
         * @param {String} eventName Event's Name
         * @param {Function} func Function do event action
         */
        unbind: function (eventName, func) {
            this._doEachEvent(eventName, function (container, index) {
                if (container[index] === func) {
                    collectionUtil.removeByIndex(container, index); // remove function out of a event
                }
            });
        },

        /**
         * Clean an event
         * @method clean
         * @param {String} eventName Event's Name
         */
        clean: function (eventName) {
            delete this._eventsContainer[eventName];
        },

        /**
         * Clean all event of this object
         * @method reset
         */
        reset: function () {
            this._eventsContainer = {};
        },

        /**
         * Trigger an event
         * @method trigger
         * @param {String} eventName Event's Name
         * @param {Any[]} [...] Values to pass to a bound function
         */
        trigger: function (eventName) {
            var args = arguments,
                self = this;

            // with each func in event container, apply it with arguments pass to trigger function
            this._doEachEvent(eventName, function (container, index) {
                container[index].apply(self, Array.prototype.slice.call(args, 1));
            });
        },

        /**
         *
         * @param func
         */
        _doEachEvent: function (eventName, func) {
            var eventContainer = this._eventsContainer[eventName],
                eventLength;

            // initialize an event container if not exist
            if (eventContainer) {
                eventLength = collectionUtil.size(eventContainer);

                for (var i = eventLength; i >=0; i--) {
                    // call always fast than apply
                    func.call(this, eventContainer, i);
                }
            }
        }

    });

}).call(this, light8);