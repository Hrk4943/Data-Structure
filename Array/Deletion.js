let a=[1,2,3,4,5]
let n=a.length
let pos=4
for(let i=pos-1;i<n-1;i++){
    a[i]=a[i+1]
}
console.log(a)