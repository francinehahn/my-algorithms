/* The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1)
or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the
following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where
births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

Example 1:
Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

Example 2:
Input: board = [[1,1],[1,0]]
Output: [[1,1],[1,1]]
*/

function gameOfLife(array) {
    if (typeof array !== "object") {
        return "The input of the function must be an array of arrays."
    }
    if (array.length === 0) {
        return "The input of the function cannot be an empty array."
    }

    const newArray = []

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "object") {
            return "The input of the function must be an array of arrays."
        }

        newArray.push([])

        for (let j = 0; j < array[i].length; j++) {
            let liveCell = 0

            if (typeof array[i][j] !== "number" || (array[i][j] !== 0 && array[i][j] !== 1)) {
                return "The arrays must contain only numbers (0 or 1)."
            }

            //looking at the index before and the index after, if they exist
            if (j !== 0 && array[i][j - 1] === 1) {
                liveCell += 1
            }
            if (j !== array[i].length - 1 && array[i][j + 1] === 1) {
                liveCell += 1
            }

            //looking at the previous array, if it exists
            if (i !== 0) {
                if (j !== 0 && array[i-1][j-1] === 1) {
                    liveCell += 1
                }
                if (array[i-1][j] === 1) {
                    liveCell += 1
                }
                if (j !== array[i].length - 1 && array[i-1][j+1] === 1) {
                    liveCell += 1
                }
            }

            //looking at the next array, if it exists
            if (i !== array.length - 1) {
                if (j !== 0 && array[i+1][j-1] === 1) {
                    liveCell += 1
                }
                if (array[i+1][j] === 1) {
                    liveCell += 1
                }
                if (j !== array[i].length - 1 && array[i+1][j+1] === 1) {
                    liveCell += 1
                }
            }

            //changing the value of the number being analyzed according to the number of live cells around it
            if (array[i][j] === 1 && (liveCell === 2 || liveCell === 3)) {
               newArray[i].push(1)
            } else if (array[i][j] === 0 && liveCell === 3) {
                newArray[i].push(1)
            } else {
                newArray[i].push(0)
            }
        }
    }

    return newArray
}

const result1 = gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]) //[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
console.log(result1)

const result2 = gameOfLife([[1,1],[1,0]]) //[[1,1],[1,1]]
console.log(result2)

const result3 = gameOfLife([[1,1],["1",0]]) //error
console.log(result3)

const result4 = gameOfLife([]) //error
console.log(result4)

const result5 = gameOfLife("hello") //error
console.log(result5)

const result6 = gameOfLife([[1,3],[1,0]]) //error
console.log(result6)