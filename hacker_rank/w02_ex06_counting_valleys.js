/*
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    let level = 0, below = false, res = 0
    const arr = path.split('')
    
    for(let i = 0; i < steps; i++) {
        arr[i] === 'D' ? level-- : level++
        level < 0 ? below = true : below = false
        below === true && level === -1 && arr[i + 1] === 'U' ? res++ : null
        console.log(`arr[i] = ${arr[i]}\tlevel = ${level}\tbelow = ${below}\tres = ${res}`)
    }
    return res
}

// console.log(countingValleys(8, "UDDDUDUU")) // 1 0 -1 -2 -1 -2 -1 0                  ==> 1 valley
// console.log(countingValleys(12, "DDUUDDUDUUUD")) // -1 -2 -1 0 -1 -2 -1 -2 -1 0 -1   ==> 2
// console.log(countingValleys(10, "UDUUUDUDDD")) // 1 0 1 2 3 2 3 2 1 1 0              ==> 0
console.log(countingValleys(12, "DDUUDDUDUUUD")) // -1 -2 -1 0 -1 -2 -1 -2 -1 0 1 0     ==> 2