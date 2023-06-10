function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    // Find the minimum element in the remaining unsorted array
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the minimum element with the current element
      [array[i], array[minIndex]] = [array[minIndex], array[i]];  
  }
  console.log(array) ;
}

// Example usage:
const array = [243, 45, 23, 356, 3, 5346, 35, 5];
selectionSort(array);
; // Output: [2, 3, 4, 5, 8]



//or


 
function selectionSort(arr) { 
  const length = arr.length; 
  for (let i = 0; i < length - 1; i++) { 
    let minIndex = i; 
    for (let j = i + 1; j < length; j++) { 
      if (arr[j] < arr[minIndex]) { 
        minIndex = j; 
      } 
    } 
    swap(arr, minIndex, i); 
  }
  console.log(arr); 
}

function swap(arr, index1, index2) {
  const temp = arr[index1]; 
  arr[index1] = arr[index2]; 
  arr[index2] = temp; 
}

const arr = [64, 25, 12, 22, 11]; 
selectionSort(arr); 


//or

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }  
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.log(arr);
}
let a = [243, 45, 23, 356, 3, 5346, 35, 5] ;
selectionSort(a); 
