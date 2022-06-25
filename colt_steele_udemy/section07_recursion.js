// ---------------------------------------------
// Basic counter ex
// ---------------------------------------------
// function countDown(num) {
//     if (num < 0) {
//         console.log('done')
//         return
//     }
//     console.log(num)
//     num--
//     countDown(num)
// }
// countDown(5)

// ---------------------------------------------
// Sum Range
// ---------------------------------------------
// function sumRange(num) {
//     if (num ===  1) return 1
//     return num + sumRange (num - 1)
// }
// console.log(sumRange(5)) // 5 + 4 + 3 + 2 + 1 = 15