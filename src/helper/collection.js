(function(){
  
    /**
    * Get size of an collection
    * @memberOf light8.util.collection
    * @method size
    * @param {Object} collection Where to copy to
    */
    function size(collection) {
        if (!collection || typeof collection !== 'object') {
            return 0;
        }

        return collection.length;
    }

    /**
     * Remove an item out of collection by index
     * @memberOf light8.util.collection
     * @method removeByIndex
     * @param {Object} collection The collection
     * @param {Number} index The index of item
     */
    function removeByIndex(collection, index) {
        if (!collection) {
            return;
        }

        collection.splice(index, 1);
    }

    /**
     * Wipe a collection (array) to avoid Garbage Collection slow
     * @memberOf light8.util.collection
     * @method wipe
     * @param {Array} collection The collection need to be wiped
     */
    function wipe(collection) {
        if (!collection) {
            return;
        }

        // clear all item of collection and avoid Garbage Collection slow
        // it will effective than call collection = []
        collection.length = 0;
    }

    /** @namespace light8.util.collection */
    light8.util.collection = {
        size: size,
        removeByIndex: removeByIndex,
        wipe: wipe
    };
  
})();