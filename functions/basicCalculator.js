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
 
    const numberOfOpenParentheses = expression.replaceAll(" ", "").split("").filter(item => item === "(")
    const numberOfClosedParentheses = expression.replaceAll(" ", "").split("").filter(item => item === ")")

    if (numberOfOpenParentheses.length !== numberOfClosedParentheses.length) {
        return "Invalid expression."
    }

    expression = expression.replaceAll(" ", "")
    return resultOfTheExpression(expression)
}


function calculate (num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2
    }
    else if (operator === '-') {
        return num1 - num2
    }
}


function resultOfTheExpression (expression) {
    let result = 0
    let number = "0"
    let operator = "+"

    //(1 + (4 + 5 + 2) - 3) + (6 + 8)
    let  i = 0
    while (i < expression.length) {
        if (expression[0] === "+") {
            return "Invalid expression."
        }
        
        //when the char is a parenthesis
        if (expression[i] === "(") {
            let temp = 0
            let numberOpenParentheses = 1
            let numberClosedParentheses = 0

            for (let j = i+1; j < expression.length; j++) {
                //this means that there is at least one parenthesis inside of the other parenthesis
                if (expression[j] === "(") {
                    numberOpenParentheses++
                }
                
                if (expression[j] === ")") {
                    numberClosedParentheses++

                    if (numberOpenParentheses === numberClosedParentheses) {
                        temp = resultOfTheExpression(expression.slice(i+1, j))
                        i = j + 1
                        break
                    }
                }
            }

            result = calculate(result, Number(temp), operator)

        //if the char is not a number, it means it is an operator
        } else if (!Number(expression[i])) {
            operator = expression[i]
            i++

        //when the char is a number
        } else {
            number = expression[i]

            for (let j = i + 1; j < expression.length; j++) {
                if (expression[j] !== "+" && expression[j] !== "-") {
                    number += expression[j]
                    i++
                } else {
                    break
                }
            }

            result = calculate(result, Number(number), operator)
            i++
        }
    }

    return result
}


const result1 = basicCalculator("") //error
console.log(result1)

const result2 = basicCalculator([]) //error
console.log(result2)

const result3 = basicCalculator("10 3") //error
console.log(result3)

const result4 = basicCalculator("(10 + 5 - (10 + 55)))") //error
console.log(result4)

const result5 = basicCalculator("1 + 5 + 100 - 2") //104
console.log(result5)

const result6 = basicCalculator("1 - (5 + 10)") //-14
console.log(result6)

const result7 = basicCalculator("1500 - (500 - 100) + 75") //1175
console.log(result7)

const result8 = basicCalculator("(1 + (4 + 5 + 2) - 3) + (6 + 8)") //23
console.log(result8)

const result9 = basicCalculator("(1 + (4 + 5 + 2) - 3 - (100 - 20 - (500 - 100))) + (6 + 8)") //343
console.log(result9)