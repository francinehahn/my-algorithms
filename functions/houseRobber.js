/* You are a professional robber planning to rob houses along a street. Each house has a certain amount 
of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have 
security systems connected and it will automatically contact the police if two adjacent houses were broken 
into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of 
money you can rob tonight without alerting the police.

Example 1:
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 2:
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

*/

function houseRobber(array) {
    if (typeof array !== "object") {
        return "The input of the function must be an array"
    }
    if (array.length === 0) {
        return "The input of the function cannot be an empty array"
    }
    if (array.length > 100) {
        return "The input of the function cannot be an array with more than 100 elements"
    }

    let included = 0
    let excluded = 0

    for (let i = 0;  i < array.length; i++) {
        if (typeof array[i] !== "number") {
            return "All elements inside the array must be numbers"
        }
        if (array[i] > 400 || array[i] < 0) {
            return "All elements inside the array must be numbers between 0 and 400"
        }

        let temp = included
        included = Math.max(included, excluded + array[i])
        excluded = temp
    }

    return Math.max(included, excluded)
}

const result1 = houseRobber("ola") //error
console.log(result1)

const result2 = houseRobber([]) //error
console.log(result2)

const result3 = houseRobber([10, 5, "2", 7]) //error
console.log(result3)

const result4 = houseRobber([2,5,9,6,12,1,25,30,15,4]) //[(2), 5, (9), 6, (12), 1, (25), 30, (15), 4] = melhor cenário: 63
console.log(result4)

const result5 = houseRobber([3,30,40,35,5,18,9,6]) //[3, (30), 40, (35), 5, (18), 9, (6)] = melhor cenário: 89
console.log(result5)

const result6 = houseRobber([2,7,9,3,1]) //12
console.log(result6)

const result7 = houseRobber([5,20,25,20,100,1]) //130
console.log(result7)

const result8 = houseRobber([0, 100, 1, 5, 100]) //200
console.log(result8)
