/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

// ------------------------------------
// AUX functions:
// ------------------------------------
const flipRow = (arr) => {
    for(let i = 0, j = arr.length - 1; i < j; i++, j--) {
        const tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
    }
    return arr
}
const flipColumn = (multArr, rowNum) => {
    for(let i = 0, j = multArr.length - 1; i < j; i++, j--) {
        const tmp = multArr[i][rowNum]
        multArr[i][rowNum] = multArr[j][rowNum]
        multArr[j][rowNum] = tmp
    }
    return multArr
}
// ------------------------------------
// Main: function:
// ------------------------------------
// function flippingMatrix(matrix) {
//     console.log("\noriginal arr ===>")
//     console.log(matrix)
//     let len = matrix.length - 1, res = 0

//     // PT1: flip rows && columns
//     for(let i = 0; i <= len; i++) {
//         if(matrix[i][0] < matrix[i][len]) {
//             flipRow(matrix[i])
//         }
//         if(matrix[0][i] < matrix[len][i]) {
//             flipColumn(matrix, i)
//         }
//     }
//     console.log("\narr after sort ===>")
//     console.log(matrix)

//     // PT2: calculate inner matrix sum
//     console.log("\nsumming internal matrix ===>")
//     const midPoint = len / 2
//     for(let i = 0; i <= midPoint; i++){
//         for(let j = 0; j <= midPoint; j++){
//             console.log(`res=${res}\tadding ${matrix[i][j]} to sum`)
//             res+=matrix[i][j]
//         }
//     }
    
//     console.log("\nfinal sum ===>")
//     return res
// }

// function flippingMatrix(matrix) {
//     let len = matrix.length - 1, res = 0
//     const cornerTL = matrix[0][0], cornerTR = matrix[0][len], cornerBL = matrix[len][0], cornerBR = matrix[len][len]
//     const arrTB = [], arrLR = [], arrInside = []
//     for(let i = 0; i <= len; i++) {
//         for(let j = 0; j <= len; j++) {
//             if(i === 0 && j === 0) {
//                 res += Math.max(cornerTL, cornerTR, cornerBL, cornerBR)
//             } else if(i === 0 && j !== len) {
//                 arrTB.push(matrix[i][j])
//                 arrTB.push(matrix[len][j])
//             } else if(i > 0 && i  < len) {
//                 arrLR.push(matrix[i][0])
//                 arrLR.push(matrix[i][len])
//             }
//         }
//     }

//     return arrLR
// }

function flippingMatrix(matrix) {
    let len = matrix.length, sum = 0
    
    for(let i = 0; i <= len / 2; i++) {
        console.log(`\n----------\ni = ${i}`)
        for(let j = 0; j <= len / 2; j++) {
            // console.log(matrix[i][j])
            console.log(`[i][j] = ${matrix[i][j]}\t[i][len-j-1] = ${matrix[i][len-j-1]}\t[len-i-1][j] = ${matrix[len-i-1][j]}\t[len-i-1][len-j-1] = ${matrix[len-i-1][len-j-1]}`)
            console.log(`[${i}][${j}] = ${matrix[i][j]}\t[${i}][${len-j-1}] = ${matrix[i][len-j-1]}\t\t[${len-i-1}][${j}] = ${matrix[len-i-1][j]}\t\t[${len-i-1}][${len-j-1}] = ${matrix[len-i-1][len-j-1]}`)
            max= Math.max(matrix[i][j], matrix[i][len-j-1], matrix[len-i-1][j], matrix[len-i-1][len-j-1])
            sum += max
            console.log(`max = ${max} sum = ${sum}\n`)
        }
    }

    return sum
}

const arr = [
    [ 112, 42, 83, 119 ],
    [ 56, 125, 56, 49 ],
    [ 15, 78, 101, 43 ],
    [ 62, 98, 114, 108 ]
  ]

console.log(flippingMatrix(arr))