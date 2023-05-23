let a=[1,2,3,4,5]
let n=a.length
let sum=0
for(let i=0;i<n;i++){
    if(a[i]%2==0){
        sum=sum+a[i]
    }
}
console.log(sum)