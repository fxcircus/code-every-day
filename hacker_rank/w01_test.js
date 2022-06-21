function findMedian(arr) {
    arr.sort((a, b) => a - b)
    console.log(arr)
    if (arr.length % 2 === 0) {
        return (arr[arr.length / 2] + arr[(arr.length / 2) + 1]) / 2
    } else {
        console.log('aaa')
        return arr[parseInt(arr.length / 2)]
    }

}

console.log(findMedian([0, 1, 2,200 , 100, 4, 6, 5, 3, 100]))