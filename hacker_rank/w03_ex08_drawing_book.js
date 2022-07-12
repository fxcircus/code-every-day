/* The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n: num of pages in book
 *  2. INTEGER p: page to get to
 */

// function pageCount(n, p) {
//     let fromStart = p, fromEnd  = n - p
//     if (n === p || n === 1 || (n - p === 1)) {
//         return 0
//     } else if ((p % 2 === n % 2 || (n % 2 > p % 2))) {
//         fromEnd--
//         fromStart--
//     }
//     console.log(`fromStart=${fromStart}\tfromEnd=${fromEnd}`)
//     return fromStart < fromEnd ? fromStart : fromEnd
// }

function pageCount(n, p) {
    let fromStart = 0, fromEnd  = 0
    const isOddP = p % 2
    if (n === p || n === 1 || ((n - p === 1) && !isOddP)) {
        return 0
    }
    for (let i = p % 2; i < p; i+=2) {
        fromStart++
    }
    for (let j = n; j > p; j-=2) {
        fromEnd++
    }
    if (p % 2 === 0 && n % 2 === 1) {
        console.log(`lowering`)
        fromEnd--
    }
    console.log(`fromStart=${fromStart}\tfromEnd=${fromEnd}`)
    return fromStart < fromEnd ? fromStart : fromEnd
}

// console.log(pageCount(5, 3)) // 1
// console.log(pageCount(6, 2)) // 1
// console.log(pageCount(6, 3)) // 1
// console.log(pageCount(2, 1)) // 0
// console.log(pageCount(7, 3)) // 1
// console.log(pageCount(7, 4)) // 1
console.log(pageCount(6, 5)) // 1
// console.log(pageCount(95073, 17440)) // 8720