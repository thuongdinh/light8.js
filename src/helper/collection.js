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

    /** @namespace light8.util.collection */
    light8.util.collection = {
        size: size,
        removeByIndex: removeByIndex
    };
  
})();