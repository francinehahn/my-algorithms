/* You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array
represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.

Example 1:
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 2 steps from index 1 to 4, then 1 step to the last index.

Example 2:
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

*/

function jumpGame (array) {
    if (typeof array !== "object") {
        return "The input of the function must be an array of integers."
    }

    let steps = 1
    for (let i = 0; i < array.length; i+=steps) {
        if (array[i] % 1 !== 0) {
            return "The input of the function must be an array of integers."
        }

        steps = array[i]

        if (i === array.length - 1) {
            return true
        }
        if (array[i] === 0) {
            return false
        }
    }

    return false
}

const result1 = jumpGame([1, 3, 1, 4, 2, 1, 1, 3]) //true
console.log(result1)

const result2 = jumpGame([4, 3, 1, 4, 2, 1, 1, 3]) //true
console.log(result2)

const result3 = jumpGame([0, 3, 1, 4, 2, 1, 1, 3]) //false
console.log(result3)

const result4 = jumpGame([7, 3, 1, 4, 2, 1, 1, 3]) //true
console.log(result4)

const result5 = jumpGame([10, 3, 1, 4, 2, 1, 1, 3]) //false
console.log(result5)

const result6 = jumpGame([1, 2, 1, 4.4, 2, 1, 1, 3]) //error
console.log(result6)

const result7 = jumpGame([1, 2, 1, "hello", 2, 1, 1, 3]) //error
console.log(result7)

const result8 = jumpGame("hello") //error
console.log(result8)