/* Given an integer x, return x with its digits reversed. DON'T USE THE REVERSE METHOD!

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
*/

function reverseInteger (int) {
    const arrayOfNumbers = int.toString().split("")
    const reverseArray = []

    if (int < 0) {
        reverseArray.push("-")
        arrayOfNumbers.shift()
    }

    for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
        reverseArray.push(Number(arrayOfNumbers[i]))
    }

    int = reverseArray.join("")

    return Number(int)
}

const result1 = reverseInteger(123)
console.log(result1)

const result2 = reverseInteger(-123)
console.log(result2)

const result3 = reverseInteger(320)
console.log(result3)

const result4 = reverseInteger(320000)
console.log(result4)

const result5 = reverseInteger(-10)
console.log(result5)