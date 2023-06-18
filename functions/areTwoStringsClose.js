/* Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb

Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

Example 1:
Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"

Example 2:
Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.

Example 3:
Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"
*/

function areTwoStringsClose (word1, word2) {
    if (typeof word1 !== "string" || typeof word2 !== "string") {
        return "The parameters of the function must be of type string."
    }
    if (word1.length < 1) {
        return "Word 1 should have at least 1 character."
    }
    if (word2.length > 100000) {
        return "Word 2 should have less than 100.001 characters."
    }

    word1 = word1.toLowerCase().split("").sort()
    word2 = word2.toLowerCase().split("").sort()

    if (word1.length !== word2.length) {
        return false
    }

    const setWord1 = new Set(word1)
    const setWord2 = new Set(word2)

    if (new Array(...setWord1).join("") !== new Array(...setWord2).join("")) {
        return false
    }

    return true
}

const result1 = areTwoStringsClose(10, "abbccc") //error
console.log(result1)

const result2 = areTwoStringsClose("", "abbccc") //error
console.log(result2)

const result3 = areTwoStringsClose("abc", "bca") //true
console.log(result3)

const result4 = areTwoStringsClose("a", "aa") //false
console.log(result4)

const result5 = areTwoStringsClose("cabbba", "abbccc") //true
console.log(result5)

const result6 = areTwoStringsClose("kkkc", "ccck") //true
console.log(result6)

const result7 = areTwoStringsClose("dddea", "eeead") //true
console.log(result7)