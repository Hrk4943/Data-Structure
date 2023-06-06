function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
        let currentValue=arr[i]
        let currentIndex=i-1
        while(currentIndex>=0 && arr[currentIndex]>currentValue){
            arr[currentIndex+1]=arr[currentIndex]
            currentIndex=currentIndex-1
        }
        arr[currentIndex+1]=currentValue
    }
    console.log(arr)
}

const array = [243, 45, 23, 356, 3, 5346, 35, 5];
insertionSort(array)
