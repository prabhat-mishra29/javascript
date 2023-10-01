let p1=new Promise(function(resolve,reject){
   console.log("Promise is pending");
   setTimeout(function(){
    //[basicaly this part is written in then()]console.log("I am promise and i am resolved!");
    resolve(true);
   },6000);
});
//before setTimeout function it shows pending state after 5 second it shows fulfilled state.

let p2=new Promise(function(resolve,reject){
    console.log("Promise is pending");
    setTimeout(function(){
     //[basicaly this part is written in catch()]console.log("I am promise and i am rejected!");
     reject(new Error("I am a Error!"));
    },6000);
 });
 //If you have 50 promises then it can run parallelly.
 console.log(p1,p2);

 /*
 Promise.then() takes two arguments, a callback for success and another for failure.
    myPromise.then(
        function(value) { // code if successful },
        function(error) { // code if some error },
    );

p1.then((value)=>{
    console.log(value);
},(error)=>{
    console.log(error);
})
p2.then((value)=>{
    console.log(value);
},(error)=>{
    console.log(error);
})
*/

//Rather than using two function we use two different method then() for values and catch() for errors.
// To get the value
p1.then((value) => {
    console.log("I am promise and i am resolved!");
    console.log(value);
})
// To catch the errors
p2.catch((error) => {
    console.log("I am promise and i am rejected!");
    console.log(error);
})

//Another exmaple:--
let promise1=new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve("done");
   },1000);
});
promise1.then(alert);
let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
     reject(new Error("Error Boiii!"));
    },4000);
 });
promise2.catch(alert);

//Another example:---
    //Waiting for a Timeout:---
        //Example Using Callback:---
        setTimeout(function() { myFunction("I love You !!!"); }, 1000);
        function myFunction(value) {
            document.getElementById("demo1").innerHTML = value; 
        }

        //Example Using Promise:----
        let myPromise = new Promise(function(myResolve, myReject) {
        setTimeout(function() { myResolve("I love You !!"); }, 4000);
        });
        myPromise.then(function(value) {
        document.getElementById("demo2").innerHTML = value;
        });