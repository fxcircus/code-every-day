// Using Bitwise NOT (~)
// https://developer.mozilla.org/en-US/docs/Web/JavaScrifpt/Reference/Operators/Bitwise_NOT

function flippingBits(n) {
    const shift32Bit = 2 ** 32 -1 // Decimal: 4294967296-1=4294967295 Binary: 11111111111111111111111111111111
    return shift32Bit - n
}

// console.log(flippingBits(1))
// console.log(flippingBits(3)) // 4294967292
// console.log(flippingBits(2147483647)) // 2147483648
// console.log(flippingBits(1)) // 4294967294
// console.log(flippingBits(0)) // 4294967295
// console.log(flippingBits(4294967295))

// console.log(flippingBits(4))
// console.log(flippingBits(16384))
// console.log(flippingBits(16))
// console.log(flippingBits(262144))
// console.log(flippingBits(268435456))
// console.log(flippingBits(1024))
// console.log(flippingBits(1048576))
// console.log(flippingBits(16))
// console.log(flippingBits(16777216))
console.log(flippingBits(2147483648))
// console.log(flippingBits(1))
// console.log(flippingBits(4194304))
// console.log(flippingBits(16384))
// console.log(flippingBits(128))