/* You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time.
However, you can buy it then immediately sell it on the same day.
Find and return the maximum profit you can achieve.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.

Example 2:
Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.

Example 3:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
*/

function profitFromStocks (array) {
    let difference = 0
    let totalProfit = 0

    let i = 0
    while (i < array.length - 1) {
        let rounds = 1

        for (let j = i + 1; j < array.length; j++) {
            if (difference <= array[j] - array[i]) {
                difference = array[j] - array[i]
                rounds++

                if (i === 0 && j === array.length - 1) {
                    totalProfit = difference
                    break
                }
            } else if (difference === 0 && difference > array[j] - array[i]) {
                difference = 0
            } else {
                totalProfit += difference
                difference = 0
                break
            }
        }

        i += rounds
    }

    return totalProfit
}

const result1 = profitFromStocks([3, 7, 9, 10, 2]) //7
console.log(result1)

const result2 = profitFromStocks([1, 5, 3, 6, 4]) //7
console.log(result2)

const result3 = profitFromStocks([7, 1, 5, 3, 6, 4]) //7
console.log(result3)

const result4 = profitFromStocks([1, 2, 3, 4, 5]) //4
console.log(result4)

const result5 = profitFromStocks([7, 6, 4, 3, 1]) //0
console.log(result5)

const result6 = profitFromStocks([3, 4, 6, 1, 10, 8, 2, 1]) //12
console.log(result6)