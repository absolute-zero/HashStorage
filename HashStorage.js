class HashStorage {
    addValue(key, value) {
        this[key] = value;
    }

    getValue(key) {
        return this[key];
    }

    deleteValue(key) {
        if (this[key]) {
            delete this[key];
            return true;
        }
        return false;
    }

    getKeys() {
        let arr = []
        for (let key in this) {
            arr.push(key);
        }
        return arr;
    }
}

export default HashStorage;