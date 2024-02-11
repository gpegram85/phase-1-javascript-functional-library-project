function myEach(collection, callback) {
    if (typeof collection === 'object') {
        const collectionConversion = Object.values(collection)

        collectionConversion.forEach(element => {
            callback(element)
        })
        return collection
    } else {    
        collection.forEach(element => {
            callback(element)
        });
    }
    return collection
}


// .map returns a new array with values transformed by the callback passed into the .map(callback)
function myMap(collection, callback) {
    if (typeof collection === 'object') {
        const collectionConversion = Object.values(collection)
        
        const mappedCollection = collectionConversion.map(callback)
        return mappedCollection
    } else {
        const mappedCollection = collectionConversion.map(callback)
        return mappedCollection
    }
}

function myReduce(collection, callback, acc) {
    if(typeof collection === 'object') {
        const keys = Object.keys(collection)
        if(arguments.length < 3) {
        acc = collection[keys[0]]
        for (let i = 1; i < keys.length; i++) {
            acc = callback(acc, collection[keys[i]], collection)
        } return acc
    } else if (arguments.length === 3) {
        for (let i = 0; i < keys.length; i++) {
            acc = callback(acc, collection[keys[i]], collection)
        } return acc 
        }
    }
    
    if(Array.isArray(collection)) {
        if (arguments.length < 3) {
            acc = collection[0]
            for (let i = 1; i < collection.length; i++) {
                acc = callback(acc, collection[i], collection)
            } return acc
        } else if (arguments.length === 3) {
            for (let i = 0; i < collection.length; i++) {
                acc = callback(acc, collection[i], collection)
            } return acc
        }
    } else return 'Unsupported Data Type'
}

function myFind(collection, predicate) {
    if(Array.isArray(collection)) {
        // const result = collection.find(predicate)
        // return result

        for(let i = 0; i < collection.length; i++) {
            if(collection[i] === predicate) {
                return collection[i]
            }
        }
        
    }

    if(typeof collection === 'object') {
        const collectionConversion = Object.values(collection)
        const result = collectionConversion.find(predicate)
        return result
    } else return 'Unsupported Data Type'
}

function myFilter(collection, predicate) {
    if(Array.isArray(collection)) {
        // const filteredCollection = collection.filter(predicate)
        // return filteredCollection

        const filteredCollection = []
        for(let i = 0; i < collection.length; i++){
            if(predicate(collection[i])){
                filteredCollection.push(collection[i])
            }
        } return filteredCollection

    } else

    if(typeof collection === 'object') {
        const collectionConversion = Object.values(collection)
        const result = collectionConversion.filter(predicate)
        return result
    } else return 'Unsupported Data Type'
}

function mySize(collection) {
    if(Array.isArray(collection)) {
        // return collection.length

        // while(collection[collectionLength] !== undefined) {
        //      collectionLength++ }
        // return collectionLength

        let collectionLength = 0
        for(let i = 0; i <= collection.length; i++) {
        collectionLength = i
        } return collectionLength
    }
    
    if(typeof collection === 'object') {
        const collectionConversion = Object.values(collection)
        return collectionConversion.length
    }
}

function myFirst(array, n) {
    if(arguments.length < 2) {
         const slicedArray = array.slice(0, 1)
        return slicedArray[0]
    } else if (arguments.length === 2) {
        parseInt(n)
        const slicedArray = array.slice(0, n)
        return slicedArray
    }
}

function myLast(array, n) {
    const copyArray = array.slice()
    if(arguments.length < 2) {
        const poppedElement = copyArray.pop()
        return poppedElement
    } else if(arguments.length === 2) {
        const slicedArray = copyArray.slice(-n)
        return slicedArray
    }
}

function myKeys(obj) {
    let keyArray = []
    keyArray = Object.keys(obj)
    return keyArray
}

function myValues(obj) {
    let valueArray = []
    valueArray = Object.values(obj)
    return valueArray
}