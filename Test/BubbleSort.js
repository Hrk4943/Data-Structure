function BubbleSort(arr){
    let n=arr.length
    let temp=0
    for(let i=0;i<n;i++){
        for(let j=0;j<n-1;j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    console.log(arr)
}

const array=[243, 45, 23, 356, 3, 5346, 35, 5]
BubbleSort(array)

//recursion

function BubbleSortRecursion(arr,n){
    let temp=0
    if(n===0 || n===1){
        return
    }
    for(let i=0;i<n-1;i++){
        if(arr[i]>arr[i+1]){
            temp=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
        }
    }
    return BubbleSortRecursion(arr,n-1)
}
const a=[243, 45, 23, 356, 3, 5346, 35, 5]
const n=a.length
BubbleSortRecursion(a,n)
console.log(a)