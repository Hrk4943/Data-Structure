function bubbleSort(arr){
    const n=arr.length
    for(let i=0;i<n;i++){
        for(let j=0;j<n-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    console.log(arr)
}

const a=[243, 45, 23, 356, 3, 5346, 35, 5]
bubbleSort(a)

// or

function BubbleSort(arr){
    const n=arr.length
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