/* The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n: page to get to
 *  2. INTEGER p: num of pages in book
 */

function pageCount(n, p) {
    let fromStart = p, fromEnd  = n - p
    if (n === p || n === 1 || (n - p === 1)) {
        return 0
    } else if ((p % 2 === n % 2 || (n % 2 > p % 2))) {
        fromEnd--
        fromStart--
    }
    console.log(`fromStart=${fromStart}\tfromEnd=${fromEnd}`)
    return fromStart < fromEnd ? fromStart : fromEnd
}

// console.log(pageCount(5, 3)) // 1
// console.log(pageCount(6, 2)) // 1
// console.log(pageCount(2, 1)) // 0
console.log(pageCount(7, 3)) // 1