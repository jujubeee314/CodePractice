class Map {

    /**
     * @param {array[]} array
     */
    constructor(array) {

        for (let i = 0; i < array.length; ++i)
            this[i] = array[i]; 

    }

}

module.exports = Map;