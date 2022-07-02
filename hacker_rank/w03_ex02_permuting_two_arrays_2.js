/*
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
    let res = 0
    for (let i = 0; i < s.length; i++) {
        let sum = 0, segmentEnd = i + m
        for(let j = i; j < segmentEnd && segmentEnd <= s.length ; j++) sum += s[j] 
        sum === d ? res++ : null
    }
    return res
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2)) // 2
console.log(birthday([1, 2, 1, 3, 2], 3, 2)) // 2
console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2)) // 0
console.log(birthday([4], 4, 1)) // 1