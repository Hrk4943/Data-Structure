// let a=[1,2,3,4,5,6]
// a.reverse()
// console.log(a)

let a=[1,2,3,4,5]
let n=a.length
// for(let i=n-1;i>=0;i--){
//     console.log(a[i])
// }

//another way
let temp=0
for(let i=0;i<n/2;i++){
    temp=a[i]
    a[i]=a[n-i-1]
    a[n-i-1]=temp
}
console.log(a)