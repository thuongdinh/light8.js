(function(){

    /**
     * Wipe a object to avoid Garbage Collection slow
     * @memberOf light8.util.object
     * @method wipe
     * @param {Object} obj The obj need to be wiped
     */
    function wipe(obj) {
        if (!obj) {
            return;
        }

        // clear all item of obj and avoid Garbage Collection slow
        // it will effective than call obj = {}
        for (var p in obj){
            if (obj.hasOwnProperty(p))
                delete obj[p];
        }
    }

    /** @namespace light8.util.collection */
    light8.util.object = {
        wipe: wipe
    };
  
})();