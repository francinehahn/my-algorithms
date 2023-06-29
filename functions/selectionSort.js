function selectionSort (array) {
    if (typeof array !== "object") {
        return "The function expects an array as a parameter."
    }
    if (array.length === 0) {
        return "The length of the array cannot be 0."
    }
    if (array.length > 5000) {
        return "The length of the array cannot be higher than 5000."
    }

    for (let i = 0; i < array.length - 1; i++) {
        if (typeof array[0] !== "number") {
            return "The array must contain only numbers."
        }

        let indexSmaller = i

        for (let j = i + 1; j < array.length; j++) {
            if (typeof array[j] !== "number") {
                return "The array must contain only numbers."
            }

            if (array[j] < array[indexSmaller]) {
                indexSmaller = j
            }
        }

        //switch positions
        if (array[i] !== array[indexSmaller]) {
            let temp = array[i]
            array[i] = array[indexSmaller]
            array[indexSmaller] = temp
        }
    }

    return array
}

const result1 = selectionSort("") //error
console.log(result1)

const result2 = selectionSort([]) //error
console.log(result2)

const result3 = selectionSort([0, 2, "5"]) //error
console.log(result3)

const result4 = selectionSort([0, 1, 3, 5, 6]) //[0, 1, 3, 5, 6]
console.log(result4)

const result5 = selectionSort([3, 11, 25, 5, 60, 32, 9]) //[3, 5, 9, 11, 25, 32, 60]
console.log(result5)