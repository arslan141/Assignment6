function find_largest(arr, n) {
    // Sort the array in descending order
    arr.sort((a, b) => b - a);
    
    // Return the nth largest number
    return arr[n - 1];
}

// Example usage:
let numbers = [10, 5, 20, 15, 30];
let nthLargest = find_largest(numbers, 2);
console.log("The 2nd largest number:", nthLargest); 
