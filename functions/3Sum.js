/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that 
i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

*/

function threeSum (array) {
    if (typeof array !== "object") {
        return "The function expects an array as a parameter."
    }
    if (array.length < 3) {
        return "The length of the array cannot be less than 3."
    }
    if (array.length > 1000) {
        return "The length of the array cannot be higher than 1000."
    }

    const result = []

    for (let i = 0; i < array.length - 2; i++) {
        if (typeof array[i] !== "number") {
            return "The array must contain only numbers."
        }

        for (let j = i + 1; j < array.length - 1; j++) {
            if (typeof array[j] !== "number") {
                return "The array must contain only numbers."
            }

            for (let k = j + 1; k < array.length; k++) {
                if (typeof array[k] !== "number") {
                    return "The array must contain only numbers."
                }

                if (array[i] + array[j] + array[k] === 0) {
                    const temp = [array[i], array[j], array[k]].sort((prev, curr) => prev - curr > 0? 1 : -1)
                    let isEqual = false

                    result.forEach(item => {
                        if (item[0] === temp[0] && item[1] === temp[1] && item[2] === temp[2]) {
                            isEqual = true
                        }
                    })

                    if (!isEqual) {
                        result.push(temp)
                    }
                }
            }
        }
    }

    return result
}

const result1 = threeSum([]) //error
console.log(result1)

const result2 = threeSum(10) //error
console.log(result2)

const result3 = threeSum([0, 5, "10"]) //error
console.log(result3)

const result4 = threeSum([-1, 0, 1, 2, -1, -4]) //[[-1,-1,2], [-1,0,1]]
console.log(result4)

const result5 = threeSum([0,1,1]) //[]
console.log(result5)

const result6 = threeSum([0,0,0]) //[[0, 0, 0]]
console.log(result6)

const result7 = threeSum([0,0,0,0,0,0]) //[[0, 0, 0]]
console.log(result7)