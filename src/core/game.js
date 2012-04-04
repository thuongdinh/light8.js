//=require(events.js)

(function (namespace) {

    "use strict";

    var animationUtil = light8.util.animation,
        requestAnimFrame = animationUtil.requestAnimFrame;

    if (light8.Game) {
        return;
    }

    light8.Game = fabric.util.createClass(light8.Event, {

        defaults: {

        },

        currentScene: null,
        stats: null,

        initialize: function () {
            this.currentScene = new fabric.Canvas('c9');

            this.stats = new Stats();
            // Align top-left
            this.stats.getDomElement().style.position = 'absolute';
            this.stats.getDomElement().style.left = '0px';
            this.stats.getDomElement().style.top = '0px';

            document.body.appendChild(this.stats.getDomElement());

            this.objs = [];
        },

        add: function (obj) {
            this.objs.push(obj);
            this.currentScene.add(obj.getCanvasObj());
        },

        start: function () {
            this.tick();
        },

        pause: function () {

        },

        tick: function () {
            var self = this,
                func = function () {
                    self._tick();
                    requestAnimFrame(func);
                };

            func();
        },

        _tick: function () {
            var scene = this.currentScene;

            //scene.forEachObject(this._tickEachObj);
            for (var i = 0, len = this.objs.length; i < len; i++) {
                this._tickEachObj(this.objs[i]);
            }
            scene.renderAll();

            this.stats.update();
        },

        _tickEachObj: function (obj) {
            if (typeof obj['tick'] === 'function') {
                obj.tick();
            }
        }

    });

}).call(this, light8);