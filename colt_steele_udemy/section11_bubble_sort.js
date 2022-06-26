// ---------------------------------------------
// JS built in sort method
// ---------------------------------------------
// 1) Default - by Ascii (converts to string)
console.log([6, 4, 15, 10].sort()) //[ 10, 15, 4, 6 ]

// 2) Custom num sort using comparator function:
function numbercompare(num1, num2) {
    return num1 - num2
}
console.log([6, 4, 15, 10].sort(numbercompare)) // [ 4, 6, 10, 15 ]

// 3) Custom string sort by length
function compareByLength(str1, str2) {
    return str1.length - str2.length
}
console.log(["Daniel", "Algorithm", "Data Structure", "Roy"].sort(compareByLength)) // [ 'Roy', 'Daniel', 'Algorithm', 'Data Structure' ]

