def selection_sort_swaps(arr):
    swaps = 0
    n = len(arr)

    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j

        if min_idx != i:
            arr[i], arr[min_idx] = arr[min_idx], arr[i]
            swaps += 1

    return swaps

# Example usage
my_arr = [3, 4, 1, 2]
num_steps = selection_sort_swaps(my_arr)
print("Sorted array:", my_arr)
print("Number of steps taken:", num_steps)
