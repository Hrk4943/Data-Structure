function QuickSort(a){
    let n=a.length
    if(n<2){
        return a
    }
    let pivot=a[n-1]
    let left=[]
    let right=[]
    for(let i=0;i<n-1;i++){
        if(a[i]<pivot){
            left.push(a[i])
        } else {
            right.push(a[i])
        }
    }
    return QuickSort(left).concat(pivot,QuickSort(right))
}
const array=[243, 45, 23, 356, 3, 5346, 35, 5]
console.log(QuickSort(array))