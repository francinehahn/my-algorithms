/* Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically
using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = ["a"]
Output: [["a"]]

DO NOT USE THE SPLIT, THE SORT AND THE JOIN METHODS.
*/

function groupAnagrams(array) {
    if (typeof array !== "object") {
        return "The input of the function must be an array of strings."
    }
    if (array.length === 0) {
        return "The input of the function cannot be an empty array."
    }
    if (array.length > 10000) {
        return "The input of the function cannot be an array with more than 10.000 words."
    }

    const result = []

    for (let word of array) {
        if (typeof word !== "string") {
            return "The input of the function must be an array of strings."
        }
        if (word.length > 100) {
            return "The words inside the array cannot be longer than 100 characters."
        }

        if (result.length === 0) {
            result.push([word])
        } else {
            let foundAnagram = false

            for (let i = 0; i < result.length; i++) {
                //iterate over each character
                if (word.length === result[i][0].length) {
                    for (let char = 0; char < word.length; char++) {
                        const character = word.toLowerCase()[char]

                        if (result[i][0].toLowerCase().includes(character)) {
                            foundAnagram = true
                        } else {
                            foundAnagram = false
                            break
                        }
                    }

                    if (foundAnagram) {
                        result[i].push(word)
                        break
                    }
                }
            }

            if (!foundAnagram) {
                result.push([word])
            }
        }
    }

    return result
}

const result1 = groupAnagrams([]) //error
console.log(result1)

const result2 = groupAnagrams("ola") //error
console.log(result2)

const result3 = groupAnagrams(["ame", "ema", 2, "ola"]) //error
console.log(result3)

const result4 = groupAnagrams(["eat","tea","tan","ate","nat","bat"]) //[["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(result4)

const result5 = groupAnagrams(["ame", "ema", "ola", "ar", "alo", "ra", "amor"]) //[["ame", "ema"], ["ola", "alo"], ["ar", "ra"], ["amor"]]
console.log(result5)

const result6 = groupAnagrams(["a"]) //[["a"]]
console.log(result6)