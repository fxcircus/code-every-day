/* The function is expected to return an INTEGER.
* The function accepts INTEGER_ARRAY a as parameter.
*/

function pickingNumbers(a) {
    let bool = false
    for (let i = 1; i < a.length; i++) {
        const diff = Math.abs(a[i] - a[i - 1])
        console.log(i, diff)
        if (diff > 1) {
                a.splice(i,1)
                console.log(a)
            bool = true
        } else {
            bool = false
        }
    }
    return bool ? pickingNumbers(a) : a.length
}

// console.log(pickingNumbers([1,1,2,2,4,4,5,5,5])) //5
// console.log(pickingNumbers([4,6,5,3,3,1])) //3
console.log(pickingNumbers([1,2,2,3,1,2]))