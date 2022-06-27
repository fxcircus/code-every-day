/*
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
    const arr = s.split('')
    let res = 0
    for(let i = 0; i < arr.length; i+=3) {
        console.log(`checking ${arr[i]}${arr[i + 1]}${arr[i + 2]}`)
        if(arr[i] !== "S") {
            console.log(`${arr[i]} should be S\t res = ${res}`)
            res++
        }
        if(arr[i + 1] !== "O") {
            console.log(`${arr[i + 1]} should be O\t res = ${res}`)
            res++
        }
        if(arr[i + 2] !== "S") {
            console.log(`${arr[i + 2]} should be S\t res = ${res}`)
            res++
        }
    }
    return res

}

// console.log(marsExploration("SOSSPSSQSSOR")) // Expected signal: SOSSOSSOSSOS ==> 3
// console.log(marsExploration("SOSSOT")) // 1
console.log(marsExploration("SOSOOSOSOSOSOSSOSOSOSOSOSOS")) // 12