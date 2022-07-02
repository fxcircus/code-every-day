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
        let sum = 0
        const segmentEnd = i + m
        for(j = i; j < segmentEnd && segmentEnd <= s.length ; j++) {
            sum += s[j]
        }
        console.log(`i = ${i}\tsum = ${sum}`)
        if(sum === d) {
            res++
        }
    }
    return res
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2)) // 2