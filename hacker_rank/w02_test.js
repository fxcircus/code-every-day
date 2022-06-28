/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

// function numbercompare(num1, num2) {
//     return num2 - num1
// }

// MK I

// function flippingMatrix(matrix) {
//     let oneArr = []
//     let len = 0, res = 0
//     matrix.forEach(arr => {
//         oneArr = oneArr.concat(arr)
//     })
//     console.log(oneArr)
//     oneArr.sort(numbercompare)
//     len = oneArr.length
//     for(let i = Math.sqrt(len) - 1; i >= 0; i--) {
//         // console.log(i, res)
        
//         res+=oneArr[i]
//     }
//     console.log(oneArr)
//     // console.log(res)

// }

// MK II

// function flippingMatrix(matrix) {
//     let oneArr = []
//     let len = matrix.length, res = 0
//     matrix.forEach((arr, idx) => {
//         arr.sort(numbercompare)
//         // console.log(arr[idx])
//         res += arr[0]
//         console.log(arr[0])
//     })
//     return res
// }

// const flipPos = (arr1, i, arr2, j) => {
//     const tmp = arr1[i]
//     // console.log(arr1, i, arr2, j)
//     arr1[i] = arr2[j]
//     arr2[j] = tmp
// }

// MK III

// function flippingMatrix(matrix) {

//     let len = matrix.length - 1, res = 0

//     for(let i = 0; i <= len; i++) {
//         if(matrix[i][0] < matrix[i][len]) {
//             flipPos(matrix[i], 0, matrix[i], len)
//         }
//         if(matrix[0][i] < matrix[len][i]) {
//             flipPos(matrix[0], i, matrix[len],i)
//         }
//     }
//     console.log(matrix)
//     return res
// }

// MK IV

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

function flippingMatrix(matrix) {

    let len = matrix.length - 1, res = 0

    for(let i = 0; i <= len; i++) {
        if(matrix[i][0] < matrix[i][len]) {
            flipRow(matrix[i])
        }
        if(matrix[0][i] < matrix[len][i]) {
            // flipPos(matrix[0], i, matrix[len],i)
            flipColumn(matrix, i)
        }
    }
    console.log(matrix)
    return res
}

const arr = [
    [ 112, 42, 83, 119 ],
    [ 56, 125, 56, 49 ],
    [ 15, 78, 101, 43 ],
    [ 62, 98, 114, 108 ]
  ]

console.log(flippingMatrix(arr))