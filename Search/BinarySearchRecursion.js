function BinarySearchRecursion(arr,start,end,element){
if(start<=end){
    const middle =Math.floor((start+end)/2)
    if(arr[middle]===element){
        return console.log("Found at=",middle)
    }
    if(arr[middle]<element){
        return BinarySearchRecursion(arr,middle+1,end,element)
    }
    return BinarySearchRecursion(arr,middle-1,start,element)
}
return console.log("Not Found")
}
let a=[1,2,3,4,5,6]
let start=0
let end=a.length-1
BinarySearchRecursion(a,start,end,6)
