function insertionSort(a){
    let n=a.length
    for(let i=1;i<n;i++){
        let value=a[i]
        let index=i-1
        while(index>=0 && a[index]>value){
            a[index+1]=a[index]
            index--
        }
        a[index+1]=value
    }
    console.log(a)
}

const array=[243, 45, 23, 356, 3, 5346, 35, 5]
insertionSort(array)