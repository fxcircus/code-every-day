/* Given an array of integers,
where all elements but one occur twice, find the unique element */


function lonelyinteger(a) {
    let res = -1
    const frequencyCounter = {}
    a.forEach(num => {
        frequencyCounter[num] = (frequencyCounter[num] || 0) + 1
    })

    for(let key in frequencyCounter) {
        if (frequencyCounter[key] === 1) {
            res = key
            return
        }
    }


    return res !== -1 ? res :  'No Lonely Integers. All elements are repeated at least once'
}

lonelyinteger([1, 2, 3, 4, 3, 2, 1])