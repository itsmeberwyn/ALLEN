class Solution(object):
    def maxProfit(self, prices):
        minPrices = prices[0]
        maxProfit = 0
        for key, price in enumerate(prices):
            if price < minPrices:
                minPrices = price;
            else:
                if price - minPrices > maxProfit:
                    maxProfit = price - minPrices

        return maxProfit
        # return prices[sell]-prices[buy]

run = Solution()
print(run.maxProfit([7,1,5,3,6,4]))
# print(run.maxProfit([7,6,4,3,1]))
print(run.maxProfit([2,4,1]))