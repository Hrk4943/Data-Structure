function BinarySearch(arr,element){
    let start=0
    let end=arr.length-1
    while(start <= end){
        let middle=Math.floor((start+end)/2)
        if(arr[middle]===element){
            return console.log(middle)
        }
        else if(arr[middle]<element){
            start=middle+1
        }
        else{
            end=middle-1
        }
    }
    return console.log("Not Found")
}

BinarySearch([1,2,3,4,5,6],5)