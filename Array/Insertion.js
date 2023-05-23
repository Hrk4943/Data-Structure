let a=[1,2,3,4,5,6]
let n=a.length
let pos=3
let val=10
for(let i=pos;i<n;i++){
    a[i-1]=a[i]
}
a[pos]=val
console.log(a)