/*! Light8.js Copyright 2012, zneo99 (Thuong Dinh Hoang) */

var light8 = light8 || { version: "0.1.0" };

if (typeof exports != 'undefined') {
    exports.light8 = light8;
}

if (typeof document != 'undefined' && typeof window != 'undefined') {
    light8.document = document;
    light8.window = window;
} else {
    // assume we're running under node.js when document/window are not present
    light8.document = require("jsdom").jsdom("<!DOCTYPE html><html><head></head><body></body></html>");
    light8.window = light8.document.createWindow();
}

/**
 * True when in environment that supports touch events
 * @property isTouchSupported
 * @type boolean
 */
light8.isTouchSupported = "ontouchstart" in light8.document.documentElement;