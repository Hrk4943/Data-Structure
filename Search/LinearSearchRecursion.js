function LinearSearchRecursion(arr,length,element){
    if(length===0){
        return console.log("not found")
    }
    else if(arr[length-1]===element){
        return console.log("found at :",length-1)
    }
    else {
        return LinearSearchRecursion(arr,length-1,element)
    }
}

let a=[1,2,3,4,5]
let size=a.length
LinearSearchRecursion(a,size,3)