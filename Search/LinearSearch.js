function LinearSearch(arr,length,element){
    for(let i=0;i<length;i++){
        if(arr[i]===element){
            return console.log(i)
        }
    }    
    return console.log("not found")
   
}

let arr=[1,2,3,4,5]
let size=arr.length
LinearSearch(arr,size,5)