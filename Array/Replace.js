let a=[1,2,3,4,5]
let n=a.length
let pos=3
let val=10
for(let i=0;i<n;i++){
    if(a[i]==pos){
        a[i]=val
    }
}
console.log(a)