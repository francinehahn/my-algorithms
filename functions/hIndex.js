/* Given an array of integers citations where citations[i] is the number of citations a researcher received 
for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that 
the given researcher has published at least h papers that have each been cited at least h times.

Example 1:
Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 
citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 
citations each, their h-index is 3.

Example 2:
Input: citations = [1,3,1]
Output: 1

*/

function hIndex (array) {
    if (typeof array !== "object") {
        return "The function expects an array as a parameter."
    }
    if (array.length === 0) {
        return "The length of the array cannot be 0."
    }
    if (array.length > 5000) {
        return "The length of the array cannot be higher than 5000."
    }

    array = array.sort((a,b) => a > b? 1 : -1)
    let temp = 0

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            return "The array must contain only numbers."
        }

        //this means that there are at least array[i] other papers with at least array[i] number of citations
        if (array.length - i >= array[i]) {
            temp = array[i]
        }

    }

    return temp
}

const result1 = hIndex("") //error
console.log(result1)

const result2 = hIndex([]) //error
console.log(result2)

const result3 = hIndex([0, 2, "5"]) //error
console.log(result3)

const result4 = hIndex([0, 1, 3, 5, 6]) //3
console.log(result4)

const result5 = hIndex([0, 10, 3, 5, 6, 12, 11, 5, 20, 8, 14, 15, 2, 20]) //8
console.log(result5)

const result6 = hIndex([1, 3, 1]) //1
console.log(result6)