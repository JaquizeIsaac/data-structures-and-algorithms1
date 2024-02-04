## Approach & Efficiency


I used a while loop to flip the given array, setting up variables as start and end indices. I made sure the start index doesn't go beyond the end index. The start index increases, and the end index decreases until they meet at the middle, swapping all the data. The time complexity is O(1) because it goes through each element once, and the space complexity is also O(1) since memory usage stays constant regardless of the array size.

## Solution

def reverse_array(arr):
    start = 0
    ending = len(arr) - 1

    while start < ending:

        # Swapping the elements
        arr[start], arr[ending] = arr[ending], arr[start]

        # Move towards the middle, no need to sort past
        start += 1
        ending -= 1

    return arr

# Example usage

array = [1, 2, 3, 4, 5]
reversed_array = reverse_array(array)
print(reversed_array)  # Output: [5, 4, 3, 2, 1]
