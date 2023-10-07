/*
>"async and await make promises easier to write".
>The keyword "async" before a function makes the function return a promise.
>The "await" keyword can only be used inside an async function.
>The "await" keyword makes the function pause the execution and wait for a resolved promise before it continues.
*/
async function myFunction1() {
    return "Hello1";
  }

//Is the same as:
  function myFunction2() {
    return Promise.resolve("Hello2");
  }

//Here is how to use the Promise:
  myFunction1().then(
    (value)=> { console.log(value)},
    //(error) { /* code if some error */ }
  );
  myFunction2().then(
    (value)=> { console.log(value)},
    //(error) { /* code if some error */ }
  );
