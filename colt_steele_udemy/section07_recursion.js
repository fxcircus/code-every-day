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

// ---------------------------------------------
// Factorial
// ---------------------------------------------
// function factorial(num) {
    // if (num <= 1) return 1
    // return num * factorial(num - 1)
// }
// console.log(factorial(10)) // 10 * 9 * ... * 1 = 3628800

// ---------------------------------------------
// filter odd nums in array
// ---------------------------------------------
// const filtOddNums = (arr) => {
//     let newArr = []
//     if (arr.length === 0) {return newArr}
//     currNum = arr[0]
//     if (currNum % 2 !== 0) {newArr.push(currNum)}
//     newArr = newArr.concat(filtOddNums(arr.splice(1)))
//     return newArr
// }
// console.log(filtOddNums([1, 2, 3, 6, 6, 9, 11])) // [ 1, 3, 9, 11 ]

// ---------------------------------------------
// power-> accepts base and exponent, return power of the base to exponent
// ---------------------------------------------
// function power(base, expo){
//     if (expo === 0) { return 1}
//     return base * power(base, expo-1)
// }
// console.log(power(2,0)) // 1
// console.log(power(2,2)) // 4
// console.log(power(2,4)) // 16

// ---------------------------------------------
// product-> accepts num arr, return product of nums
// --------------------------------------------
// function productOfArray (arr) {
//     if (arr.length === 0) { return 1 }
//     return arr[0] * productOfArray(arr.slice(1))
// }
// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1,2,3,10])) // 60

// ---------------------------------------------
// Recursive Range-> return sum of 0 to num
// --------------------------------------------
// console.log(recursiveRange(6)) // 21
// console.log(recursiveRange(10)) // 55 
// function recursiveRange(num){
//    if (num === 0) {return 0}
//    return num + recursiveRange(num - 1)
// }

// ---------------------------------------------
// fib-> return nth num in fib series
// --------------------------------------------
console.log(fib(4)) /*  fib(3) + fib(2)
                        fib(2) + fib(1) + 1
                        1 + 1 + 1 = 3 */
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465

function fib(num){
    if ( num <= 2) {return 1}
    // console.log(num)
    return fib(num - 1) + fib(num - 2)
  }