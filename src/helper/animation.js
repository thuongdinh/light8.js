(function(){

    /**
     * Shim layer with setTimeout fallback
     * @memberOf light8.util.animation
     * @method requestAnimFrame
     */
    var requestAnimFrame = (function(){
        return  window.requestAnimationFrame       ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                window.oRequestAnimationFrame      ||
                window.msRequestAnimationFrame     ||
                function( callback ){
                    window.setTimeout(callback, 1000 / 60);
                };
    })();

    /** @namespace light8.util.collection */
    light8.util.animation = {
        requestAnimFrame: requestAnimFrame
    };
  
})();