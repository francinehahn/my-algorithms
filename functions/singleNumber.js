/* Given an integer array nums where every element appears three times except for one, which appears exactly once.
Find the single element and return it.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,3,2]
Output: 3

Example 2:
Input: nums = [0,1,0,1,0,1,99]
Output: 99
*/

function singleNumber (array) {
    if (typeof array !== "object") {
        return "The input of the function must be an array."
    }
    if (array.length < 4 || array.length > 30000) {
        return "The length of the array cannot be lower than 4 or greater than 30000."
    }

    const quantityOfEachNumber = {}
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number" || array[i] % 1 !== 0) {
            return "The input of the function must be an array of integers."
        }
        
        if (quantityOfEachNumber[array[i]]) {
            quantityOfEachNumber[array[i]] += 1
        } else {
            quantityOfEachNumber[array[i]] = 1
        }
    }

    const arrayOfNums = Object.entries(quantityOfEachNumber)
    const filterArray = arrayOfNums.filter(item => item[1] === 3)

    if (arrayOfNums.length - filterArray.length !== 1) {
        return "Each element in the array must appear exactly three times except for one element which appears only once."
    }

    return arrayOfNums.filter(item => item[1] === 1)[0][0]
}


const result1 = singleNumber([2, 2, "1", 1, 4, 1, 2, 5, 5, 5]) //error
console.log(result1)

const result2 = singleNumber([]) //error
console.log(result2)

const result3 = singleNumber([2, 2, 1, 1, 4, 1, 2, 5, 5, 5.5]) //error
console.log(result3)

const result4 = singleNumber([2, 2, 1, 1, 4, 1, 2, 5, 5, 5]) //4
console.log(result4)

const result5 = singleNumber([2,2,3,2]) //3
console.log(result5)

const result6 = singleNumber([0, 1, 0, 1, 0, 1, 99]) //99
console.log(result6)