/* Given an array arr and a chunk size, return a chunked array.
A chunked array contains the original elements in arr, but consists of subarrays each of length size.
The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

Example 1:
Input: arr = [1,2,3,4,5], size = 1
Output: [[1],[2],[3],[4],[5]]
Explanation: The arr has been split into subarrays each with 1 element.

Example 2:
Input: arr = [1,9,6,3,2], size = 3
Output: [[1,9,6],[3,2]]
Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.
*/

function chunkedArray (array, size, result = []) {
    if (array.length === 0) {
        return result
    } else {
        result.push(array.slice(0, size))
        return chunkedArray(array.slice(size), size, result)
    }
}

const result1 = chunkedArray([1, 7, 2, 5, 10, 11], 3)
console.log(result1)

const result2 = chunkedArray([1, 7, 2, 5, 10, 11, 22], 3)
console.log(result2)

const result3 = chunkedArray([1,9,6,3,2], 3)
console.log(result3)

const result4 = chunkedArray([1,2,3,4,5], 1)
console.log(result4)

const result5 = chunkedArray([], 1)
console.log(result5)