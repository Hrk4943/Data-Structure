// let a=[1,2,3,4,5]
const a=["m","a","l","a","y","a","l","a","m"]
let n=a.length
let pal="palindrome"
for(let i=0;i<n/2;i++){
    if(a[i]!==a[n-i-1]){
        pal="not palindrome"
    }
}
console.log(pal)