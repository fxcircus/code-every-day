/*
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

/*
pseudocode:
* 1. sort both A and B
*
* 2. new array C:
* C[i] = Math.abs(A[i] - 5)
*
* 3. Iterate over C:
* if C[i] >= B[i] 
* return false
* 
* 4. return true
*/

const compareNums = (x, y) => {
    return (x - y)
}

function twoArrays(k, A, B) {
    A.sort(compareNums)
    B.sort(compareNums)
    let C = A
    console.log(C)
    for(let i = 0; i < C.length; i++) {
        const inverse = Math.abs(C[i] - k)
        const bIdx = B.length - i - 1
        console.log(`comparing ${inverse} and ${B[bIdx]}`)
        if(B[bIdx] < inverse) {
            return 'NO'
        }
    }

    return 'YES'
}

console.log(twoArrays(10, [2, 1, 3], [7, 8, 9])) // YES
console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4])) // NO