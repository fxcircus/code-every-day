/*
Input - Array with 5 positive integers
output - minimum and maximum values that can be calculated by summing exactly four of the five integers.
(print in a single line of two space-separated long integers.)
*/



function miniMaxSum(arr) {
    let minSum = 0
    let maxSum = 0
    arr.sort((a, b) => a - b)
    // console.log(`sorted: ${arr}\n`) // print sorted array
    arr.forEach((element, idx) => {
        if(idx === 0) {
            minSum += element
        } else if(idx <= 3) {
            minSum += element
            maxSum += element
        } else if(idx === 4) {
            maxSum += element
        }
        // console.log(`idx = ${idx}\tminSum = ${minSum}\tmaxSum = ${maxSum}`) // print iteration result
    })
    console.log(`${minSum} ${maxSum}`)
}

const arr = [6, 3, 373, 23, 90]
miniMaxSum(arr)