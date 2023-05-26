/* Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

function lengthOfLongestSubstring (string) {
    const arrayOfCharacters = string.split("")
    let substring = []
    let length = 0
    let isEqual = false

    for (let char of arrayOfCharacters) {
        if (substring.length === 0) {
            substring.push(char)
        } else {
            for (let s of substring) {
                if (char === s) {
                    isEqual = true

                    if (length === 0) {
                        length = substring.length
                    } else {
                        if (substring.length > length) {
                            length = substring.length
                        }
                    }

                    substring = []
                    substring.push(char)
                    break
                }
            }

            if (!isEqual) {
                substring.push(char)
            }

            isEqual = false
        }
    }

    if (substring.length > length) {
        length = substring.length
    }

    return length
}

const result1 = lengthOfLongestSubstring("pwwkew")
console.log(result1)

const result2 = lengthOfLongestSubstring("bbbbbb")
console.log(result2)

const result3 = lengthOfLongestSubstring("abcabcbb")
console.log(result3)

const result4 = lengthOfLongestSubstring("ovvokrskfghlm")
console.log(result4)