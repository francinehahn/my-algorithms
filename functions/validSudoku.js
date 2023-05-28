/* Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:
A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Example 1:
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:
Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8.
Since there are two 8's in the top left 3x3 sub-box, it is invalid.
*/

function validSudoku (array) {
    if (typeof array !== "object") {
        return "The parameter of the function must be an array."
    }
    if (array.length !== 9) {
        return "The parameter array must have 9 arrays within itself."
    }

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "object") {
            return "The function expects as a parameter an array of arrays"
        }

        if (array[i].length !== 9) {
            return "The arrays within the array must have 9 indexes."
        }

        let row = ["."]
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] !== ".") {
                if ((Number(array[i][j]) > 9 || Number(array[i][j]) < 1)) {
                    return "The numbers within the arrays must be between 1 and 9."
                } else {
                    row.push(array[i][j])
                }
            }
        }

        //analyze whether there is a repetition of values in the rows
        const mySetRow = new Set(array[i])
        if (mySetRow.size !== row.length) {
            return false
        }

        row = ["."]
    }

    for (let i = 0; i < array.length; i++) {
        let column = ["."]
        
        for (let j = 0; j < array.length; j++) {
            if (array[j][i] !== ".") {
                column.push(array[j][i])
            }
        }

        //analyze whether there is a repetition of values in the columns
        const mySetColumn = new Set(column)
        if (column.length !== mySetColumn.size) {
            return false
        }
    }

    //analyze whether there is a repetition of values in the squares 3 x 3
    let square = []
    let indexRow = 0

    while (indexRow <= 6) {
        let indexColumn = 0

        while (indexColumn <= 6) {
            for (let i = indexRow; i < indexRow + 3; i++) {
                square.push(...array[i].slice(indexColumn, indexColumn + 3))
            }
        
            const filterSquare = square.filter(item => item !== ".")
            filterSquare.push(".")
            const mySetSquare = new Set(square)
        
            if (mySetSquare.size !== filterSquare.length) {
                return false
            }
    
            indexColumn += 3
            square = []
        }

        indexRow += 3
    }
    
    return true
}

const result1 = validSudoku([["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]]) // true
console.log(result1)

const result2 = validSudoku([["8","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]]) // false
console.log(result2)

const result3 = validSudoku([["1","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","15",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]]) // error
console.log(result3)

const result4 = validSudoku([["1","3",".",".","7","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","1",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]]) // error
console.log(result4)