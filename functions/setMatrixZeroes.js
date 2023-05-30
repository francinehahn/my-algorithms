/* Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/

function setMatrixZeroes (array) {
    if (typeof array !== "object") {
        return "The input of the function must be an array of arrays."
    }
    if (array.length === 0) {
        return "The input of the function cannot be an empty array."
    }

    //array that stores the position of each zero that is found
    const arrayOfIndexes = []

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "object") {
            return "The input of the function must be an array of arrays."
        }

        for (let j = 0; j < array[i].length; j++) {
            if (typeof array[i][j] !== "number") {
                return "The arrays must contain only numbers."
            }

            if (array[i][j] === 0) {
                arrayOfIndexes.push([i, j])
            }
        }
    }

    //set each number in the row and the column to zero according the array of indexes
    for (let k = 0; k < arrayOfIndexes.length; k++) {
        //row
        for (let l = 0; l < array[arrayOfIndexes[k][0]].length; l++) {
            array[arrayOfIndexes[k][0]][l] = 0
        }

        //column
        for (let l = 0; l < array.length; l++) {
            array[l][arrayOfIndexes[k][1]] = 0
        }
    }

    return array
}

const result1 = setMatrixZeroes([[1,1,1], [1,0,1], [1,1,1]]) //[[1,0,1],[0,0,0],[1,0,1]]
console.log(result1)

const result2 = setMatrixZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]) //[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
console.log(result2)

const result3 = setMatrixZeroes([[0,1,2,"0"],[3,4,5,2],[1,3,1,5]]) //error
console.log(result3)

const result4 = setMatrixZeroes([]) //error
console.log(result4)

const result5 = setMatrixZeroes("hello") //error
console.log(result5)
