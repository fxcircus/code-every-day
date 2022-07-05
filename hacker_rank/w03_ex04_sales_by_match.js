/*
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    let res = 0
    const freqCount = {}
    ar.forEach(sock => {
        freqCount[sock] = (freqCount[sock] || 0) + 1
    })
    for(const el in freqCount) {
        res += Math.floor(freqCount[el] / 2)
    }
    return res
}

let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
console.log(sockMerchant(9, ar)) // 3