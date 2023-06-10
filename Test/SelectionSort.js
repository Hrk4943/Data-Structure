function selectionSort(a){
    let n=a.length
    for(let i=0;i<n-1;i++){
        let min=i
        for(let j=i+1;j<n;j++){
            if(a[j]<a[min]){
                min=j
            }
        }
        let temp=a[i]
        a[i]=a[min]
        a[min]=temp
    }
    console.log(a)
}
const array=[243, 45, 23, 356, 3, 5346, 35, 5]
selectionSort(array)