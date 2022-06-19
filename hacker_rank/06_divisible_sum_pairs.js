/*
Given an array of integers ar, and a positive integer k
determine the number of (i, j) pairs where i < j and sum of (ar[i] + ar[j]) is divisible by k.
*/

function divisibleSumPairs(n, k, ar) {
    let res = 0
    for(let x = 0; x< n; x++) {
        for(let y = x + 1; y < n; y++){
            const sum = ar[x] + ar[y]
            if(sum % k === 0) {
                // console.log(`(${x},${y}) -> ar[${x}] + ar[${y}] = ${ar[x]} + ${ar[y]} = ${sum}`)
                res++
            }
        }
    }
    return res
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]) // 5