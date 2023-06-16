// Helper function to swap elements in an array
function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  // Function to perform heapify on a subtree rooted at index i
  function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // Left child
    const right = 2 * i + 2; // Right child
  
    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    // If right child is larger than current largest
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    // If largest is not root
    if (largest !== i) {
      swap(arr, i, largest);
  
      // Recursively heapify the affected sub-tree
      heapify(arr, n, largest);
    }
  }
  
  // Heap Sort function
  function heapSort(arr) {
    const n = arr.length;
  
    // Build a max heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  
    // Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
      // Move current root to the end
      swap(arr, 0, i);
  
      // Call max heapify on the reduced heap
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
  // Example usage:
  const array = [7, 2, 9, 1, 6, 5, 3, 8, 4];
  const sortedArray = heapSort(array);
  console.log(sortedArray);
  