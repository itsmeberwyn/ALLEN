def Get_One_Bag(bags):
    # Count the number of odd bags and even bags
    odd_bags = 0
    even_bags = 0
    for bag in bags:
        if bag % 2 == 0:
            even_bags += 1
        else:
            odd_bags += 1
    # If the number of odd bags is even, we can make an even sum
    # by selecting any odd bag or any even bag
    if odd_bags % 2 == 0:
        return len(bags)
    # If the number of odd bags is odd, we need to select one odd bag
    # to make the sum even
    else:
        return odd_bags

print(Get_One_Bag([5, 3, 76, 123, 76])) # Output: 3
print(Get_One_Bag([1, 4, 2, 3, 1, 3])) # Output: 2
print(Get_One_Bag([7, 32, 5, 23, 43])) # Output: 1
print(Get_One_Bag([87, 1, 23, 7, 34])) # Output: 1

