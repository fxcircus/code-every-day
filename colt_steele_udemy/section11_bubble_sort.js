// ---------------------------------------------
// JS built in sort method
// ---------------------------------------------
// 1) Default - by Ascii (converts to string)
// console.log([6, 4, 15, 10].sort()) //[ 10, 15, 4, 6 ]

// 2) Custom num sort using comparator function:
function numbercompare(num1, num2) {
    return num1 - num2
}
// console.log([6, 4, 15, 10].sort(numbercompare)) // [ 4, 6, 10, 15 ]

// 3) Custom string sort by length
function compareByLength(str1, str2) {
    return str1.length - str2.length
}
// console.log(["Daniel", "Algorithm", "Data Structure", "Roy"].sort(compareByLength)) // [ 'Roy', 'Daniel', 'Algorithm', 'Data Structure' ]

// ---------------------------------------------
// Bubble sort -> 
// Compare arr[i] and arr[i+1]
// Largest items float to the top using aux swap function
// ---------------------------------------------
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}
// Simplest solution
// const bubbleSort = (arr) => {
//     let runCounter = 0
//     for (let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length; j++) {
//             if(arr[j] > arr[j + 1]) {
//                 swap(arr, j, j + 1)
//             }
//             runCounter++
//         }
//     }
//     console.log(`I ran ${runCounter} times`)
//     return arr
// }

// Optimization 1: fewer iterations and changing arr length:
// const bubbleSort = (arr) => {
//     for (let i = arr.length; i > 0; i--) {
//         for(let j = 0; j < i - 1; j++) {
//             if(arr[j] > arr[j + 1]) {
//                 swap(arr, j, j + 1)
//             }
//         }
//     }
//     return arr
// }

// Optimization 2: return if no items were sorted on last run
const bubbleSort = (arr) => {
    let runCounter = 0
    for (let i = arr.length; i > 0; i--) {
        let noSwaps = true
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                noSwaps = false
            }
            runCounter++
        }
        if(noSwaps) break
    }
    console.log(`I ran ${runCounter} times`)
    return arr
}
console.log(bubbleSort([37, 45, 29, 8])) // [ 8, 29, 37, 45 ]