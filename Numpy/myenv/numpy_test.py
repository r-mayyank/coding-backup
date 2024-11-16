import numpy as np

# Create a 1-dimensional NumPy array
arr = np.array([1, 2, 3, 4, 5])

# Print the array
print(arr)

# Accessing elements of the array
print(arr[0])  # Output: 1
print(arr[2])  # Output: 3

# Perform arithmetic operations on the array
print(arr + 2)  # Output: [3 4 5 6 7]
print(arr * 3)  # Output: [3 6 9 12 15]

# Create a 2-dimensional NumPy array
arr2d = np.array([[1, 2, 3], [4, 5, 6]])

# Print the array
print(arr2d)

# Accessing elements of the array
print(arr2d[0, 1])  # Output: 2
print(arr2d[1, 2])  # Output: 6

# Perform arithmetic operations on the array
print(arr2d + 2)  # Output: [[3 4 5] [6 7 8]]
print(arr2d * 3)  # Output: [[3 6 9] [12 15 18]]