// Given an integer, return an integer that has the reverse ordering of that which was received. E.g

// reverseInteger(-123) // should return -321

// The signs must not change i.e -123 becomes -321
// The value returned must be an integer.
// All insignificant zeroes must be removed i.e 900 becomes 9 and not 009


// start here

// function reverseString(text) {
//     return [...text].reduce((acc, char) => char + acc, '')
// }

//step 1 convert integer to a string
// num.toString()

//step 2 reverse string
// Reversing a string using .reduce()
// function reverseString(text) {
//     return [...text].reduce((acc, char) => char + acc, '')
// }
// Calling the function on the string equivalent of the integer to be reversed
// let reversedString = reverseString(num.toString())

//step 3 convert back
// let reversedNumber = parseInt(reversedString)

//step 4 add sign back
// Math.sign(num)
// return (reversedNumber * Math.sign(num))


// Reverses a string
function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}

// Reverses an integer
function reverseInteger(num) {
    let reversedNumber = parseInt(reverseString(num.toString()))

    return (reversedNumber * Math.sign(num))
}
