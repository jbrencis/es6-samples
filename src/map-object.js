https://hashnode.com/post/whats-the-best-way-to-map-over-an-objectarray-in-javascript-es6-ciw5ymwxd00ifg253ffphxnne

// in ES2017
const obj = { a: 1, b: 2 }

Object.entries(obj).map(([key, value]) => /* do what you want */)

//in ES2015
const obj = { a: 1, b: 2 }

Object.keys(obj).map(key => {
    const value = obj[key]
    /* do what you want */
})

// .map returns an Array. If you want an Object back, use .reduce and build the Object.