/*Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
DON'T USE THE METHOD SORT.

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/

function medianOfTwoArrays(arr1, arr2) {
    let median
    const totalLength = arr1.length + arr2.length
    const isPar = totalLength % 2 === 0
    let indexMedian = Math.floor(totalLength / 2)
    
    let i = 0
    let j = 0
    let cont = 0
    
    while (cont <= indexMedian) {
        let currentNumber

        if (arr1[i] < arr2[j] || !arr2[j]) {
            currentNumber = arr1[i]
            i++
        } else {
            currentNumber = arr2[j]
            j++
        }
    
        if (isPar && cont === indexMedian - 1) {
            median = currentNumber
        }

        if (cont === indexMedian) {
            if (isPar) {
                median = (median + currentNumber) / 2
            } else {
                median = currentNumber
            }
        }
        
        cont++
    }
    
    return median
}

const result1 = medianOfTwoArrays([1, 2, 3], [2, 5]) //[1, 2, 2, 3, 5]
console.log(result1)

const result2 = medianOfTwoArrays([3, 7, 10], [4, 9, 10, 12]) //[3, 4, 7, 9, 10, 10, 12]
console.log(result2)

const result3 = medianOfTwoArrays([1, 3, 7, 10], [4, 9, 10, 12]) //[1, 3, 4, 7, 9, 10, 10, 12]
console.log(result3)

const result4 = medianOfTwoArrays([1,3,5], [2,4,6]) //[1, 2, 3, 4, 5, 6]
console.log(result4)