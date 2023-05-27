/* You are given a string s and an array of strings words. All the strings of words are of the same length.
A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.
For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all
concatenated strings. "acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words.
Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.

Example 1:
Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation: Since words.length == 2 and words[i].length == 3, the concatenated substring has to be of length 6.
The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.
The output order does not matter. Returning [9,0] is fine too.

Example 2:
Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
Output: []
Explanation: Since words.length == 4 and words[i].length == 4, the concatenated substring has to be of length 16.
There is no substring of length 16 is s that is equal to the concatenation of any permutation of words.
We return an empty array.

Example 3:
Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
Output: [6,9,12]
Explanation: Since words.length == 3 and words[i].length == 3, the concatenated substring has to be of length 9.
The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"] which is a permutation of words.
The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"] which is a permutation of words.
The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"] which is a permutation of words.

*/

function concatenationOfWords (string, array) {
    if (typeof string !== "string" || string === "") {
        return "The input string must be of type string and cannot be an empty string with no characters."
    }
    if (typeof array !== "object" || array.length === 0) {
        return "The input array must be of type array and cannot be empty."
    }

    let wordLength = array[0].length
    const substringLength = array.length * wordLength

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "string") {
            return "The array must contain only strings."
        }
        if (wordLength !== array[i].length) {
            return "The strings in the array must have the same length." 
        }
    }

    if (string.length < substringLength) {
        return "The length of the input string must be at least the same length of the concatenation of all words in the array."
    }

    const result = []

    //iteration to get a valid substring
    for (let i = 0; i < string.length; i+=wordLength) {        
        //the variable substring is a possible substring, but we need to check its validity
        const substring = string.slice(i, i + substringLength)

        if (substring.length !== substringLength) {
            break
        }

        //iteration to check whether the substring is valid (if the strings that were concatenated are inside the array)
        const mySet = new Set(array)
        let isValid = true
        for (let i = 0; i < substring.length; i+=wordLength) {
            if (!mySet.has(substring.slice(i, i + wordLength))) {
                isValid = false
                break
            }

            mySet.delete(substring.slice(i, i + wordLength))
        }

        if (isValid) result.push(i)
    }

    return result
}

const result1 = concatenationOfWords("wo", ["word", "have"]) //error
console.log(result1)

const result2 = concatenationOfWords("barfoofoobarthefoobarman", ["bar","foo","the"]) //[6, 9, 12]
console.log(result2)

const result3 = concatenationOfWords("wordgoodgoodgoodbestword", ["word","good","best","word"]) //[]
console.log(result3)

const result4 = concatenationOfWords("barfoothefoobarman", ["foo","bar"]) //[0,9]
console.log(result4)

const result5 = concatenationOfWords("barfoothefoobarman", ["foo", 200]) //error
console.log(result5)

const result6 = concatenationOfWords("barfoothefoobarman", ["foo", "error"]) //error
console.log(result6)