def trick_or_treat(candies, threshold):
    n = len(candies)
    min_sugar = float('inf')
    min_indices = []
    window_sum = 0
    window_start = 0
    
    for i in range(n):
        window_sum += candies[i]
        while window_sum > threshold:
            window_sum -= candies[window_start]
            window_start += 1
        
        if window_sum < min_sugar:
            min_sugar = window_sum
            min_indices = [j for j in range(window_start, i+1)]
        elif window_sum == min_sugar:
            min_indices += [j for j in range(window_start, i+1)]
    
    return min_indices



candies = [33, 20, 12, 19, 29]
threshold = 33
print(trick_or_treat(candies, threshold))