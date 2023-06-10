function mergeSort(a){
    let n=a.length
    if(n<2){
        return a
    }
    let mid=Math.floor(n/2)
    let left=a.slice(0,mid)
    let right=a.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    const result=[]
    while(left.length && right.length){
        if(left[0]<right[0]){
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return[...result,...left,...right]
}

const array=[243, 45, 23, 356, 3, 5346, 35, 5]
console.log(mergeSort(array))