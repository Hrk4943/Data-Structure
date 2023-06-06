function bubbleSort(arr, n) {
    // Base case: If there's only one element or the array is empty, it's already sorted
    if (n === 1 || arr.length === 0) {
        return;
    }

    // One pass of bubble sort to move the largest element to the end
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            // Swap elements
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    // Recursively call bubbleSort on the remaining (n-1) elements
    return bubbleSort(arr, n - 1);
}

// Example usage:
const array = [243, 45, 23, 356, 3, 5346, 35, 5];
bubbleSort(array, array.length);
console.log(array);