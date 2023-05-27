/* Given an unsorted integer array nums, return the smallest missing positive integer.
You must implement an algorithm that runs in O(n) time and uses constant extra space.
DON'T USE THE SORT METHOD!

Example 1:
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.

Example 2:
Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.

Example 3:
Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
*/

function smallestMissingPositive (array) {
    if (typeof array !== "object") {
        return "The input of the function must be an array of integers."
    }

    const set = new Set(array)
    
    for (let i = 1; i < array.length; i++) {
        if (!set.has(i)) {
            return i
        }
    }
    
    return array.length
}

const result1 = smallestMissingPositive([2, 5, 3, 1])
console.log(result1)

const result2 = smallestMissingPositive([2, 5, 3, -1])
console.log(result2)

const result3 = smallestMissingPositive([1, 2, 0])
console.log(result3)

const result4 = smallestMissingPositive([1, 5, 4, 3, 2, 7, 6, 10, 11, 15, 13, 18, 20])
console.log(result4)

const result5 = smallestMissingPositive("hello") //error
console.log(result5)

const result6 = smallestMissingPositive(10) //error
console.log(result6)