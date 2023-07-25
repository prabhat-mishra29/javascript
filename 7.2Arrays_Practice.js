// How to take input from user and put in array
let n=prompt("Enter array size:");
n=Number.parseInt(n);
let arr=[];
for(let i=0;i<n;i++){
    let a=prompt("Enter elments :");
    a=Number.parseInt(a);
    arr.push(a);
}
console.log(arr);

//filter numbers which are divisble by 10
let arr1=arr.filter((Element)=>{
    return Element%10==0;
})
console.log(arr1);
