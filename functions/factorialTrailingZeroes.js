/* Given an integer n, return the number of trailing zeroes in n!.
Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

Example 1:
Input: n = 3
Output: 0
Explanation: 3! = 6, no trailing zero.

Example 2:
Input: n = 5
Output: 1
Explanation: 5! = 120, one trailing zero.

Example 3:
Input: n = 0
Output: 0
*/

function factorialTrailingZeroes (n) {
    if (typeof n !== "number" || n % 1 !== 0 || n < 0) {
        return "The input of the function must be an integer."
    }
    if (n > 10000) {
        return "The input of the function cannot be higher than 10000."
    }

    let factorial = 1

    for (let i = 2; i <= n; i++) {
        factorial *= i
    }

    let trailingZeroes = 0
    for (let i = factorial.toString().length - 1; i > 0; i--) {
        if (factorial.toString()[i] === '0') {
            trailingZeroes += 1
        } else {
            break
        }
    }

    return trailingZeroes
}

const result1 = factorialTrailingZeroes("ola") //error
console.log(result1)

const result2 = factorialTrailingZeroes(10.1) //error
console.log(result2)

const result3 = factorialTrailingZeroes(1000000) //error
console.log(result3)

const result4 = factorialTrailingZeroes(5) //1
console.log(result4)

const result5 = factorialTrailingZeroes(7) //1
console.log(result5)

const result6 = factorialTrailingZeroes(3) //0
console.log(result6)

const result7 = factorialTrailingZeroes(0) //0
console.log(result7)

