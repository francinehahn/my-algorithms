//INCOMPLETE!!

/* Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return 
the result of the evaluation.
Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, 
such as eval().

Example 1:
Input: s = "1 + 1"
Output: 2

Example 2:
Input: s = " 2-1 + 2 "
Output: 3

Example 3:
Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
*/

function basicCalculator (expression) {
    if (typeof expression !== "string") {
        return "The input of the function must be a string."
    }
    if (expression.length < 1 || expression.length >= 100000) {
        return "The length of the expression must be between 1 and 100000."
    }
    if (!expression.includes("+") && !expression.includes("-") && !expression.includes("*") && !expression.includes("/")) {
        return "Invalid expression."
    }

    expression = expression.replaceAll(" ", "").replaceAll(")", "").split("(")
    let result = 0
    let number = "0"
    let operator = "+"

    //When the expression does not have any parentheses
    if (expression.length === 1) {
        for (let i = 0; i < expression[0].length; i++) {
            if (expression[0][0] === "+") {
                return "Invalid expression."
            }
            
            //if the char is not a number, it means it is an operator
            if (!Number(expression[0][i])) {
                operator = expression[0][i]
    
            //when the char is a number
            } else {
                number = expression[0][i]
    
                for (let j = i + 1; j < expression[0].length; j++) {
                    if (expression[0][j] !== "+" && expression[0][j] !== "-") {
                        number += expression[0][j]
                        i++
                    } else {
                        break
                    }
                }
    
                result = evaluate(result, Number(number), operator)
            }
        }

    //When the expression has parentheses
    } else {
        for (let i = 0; i < expression.length; i++) {
            for (let j = 0; j < expression[i].length; j++) {
                //if the char is not a number, it means it is an operator
                if (!Number(expression[i][j])) {
                    operator = expression[i][j]
        
                //when the char is a number
                } else {
                    number = expression[i][j]
        
                    for (let k = j + 1; k < expression[i].length; k++) {
                        if (expression[i][k] !== "+" && expression[i][k] !== "-") {
                            number += expression[i][k]
                            i++
                        } else {
                            break
                        }
                    }
        
                    expression[i] = evaluate(result, Number(number), operator)
                }
            }
        }
    }

    return result
}

function evaluate (num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2
    }
    else if (operator === '-') {
        return num1 - num2
    }
}


const result1 = basicCalculator("") //error
console.log(result1)

const result2 = basicCalculator([]) //error
console.log(result2)

const result3 = basicCalculator("10 3") //error
console.log(result3)

const result4 = basicCalculator("1 + 5 + 100 - 2") //104
console.log(result4)

const result5 = basicCalculator("1 - (5 + 10)") //-14
console.log(result5)

const result6 = basicCalculator("1500 - (500 - 100) + 75") //1175
console.log(result6)

const result7 = basicCalculator("(1 + (4 + 5 + 2) - 3) + (6 + 8)") //23
console.log(result7)