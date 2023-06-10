function mergeSort(array) {
    // Base case: if the array is empty or has only one element, it is already sorted
    if (array.length <= 1) {
        return array;
    }
    // Split the array into two halves
    const middle = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middle);
    const rightHalf = array.slice(middle);
    // Recursively sort the two halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    const result = [];
    // Compare the elements from the left and right arrays
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            // If the left element is smaller or equal, add it to the result array
            result.push(left.shift());
        } else {
            // If the right element is smaller, add it to the result array
            result.push(right.shift());
        }
    }
    return [...result,...left,...right];
}

// Example usage:
const array = [243, 45, 23, 356, 3, 5346, 35, 5];
console.log(mergeSort(array)); // Output: [2, 3, 4, 5, 8]
