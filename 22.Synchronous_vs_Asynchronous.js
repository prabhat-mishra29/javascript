/*
Synchronous:-
    >Synchronous actions are the actions that initiate and finish one-by-one.
    
let a=prompt("Enter name:");
let b=prompt("Enter age:");    
document.write(a+" is "+b+" years old.");    
*/ 

/*
Asynchronous:-
    >"I will finish later!"
    >Functions running in parallel with other functions are called asynchronous.
    >A good example is JavaScript setTimeout().
*/ 
console.log("Start");
setTimeout(myFunction, 3000);
function myFunction() {
    console.log("I love You !");
}
console.log("End");