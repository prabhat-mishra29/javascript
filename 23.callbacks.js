/*
    "I will call back later!"
    >A callback is a function passed as an argument to another function.
    >This technique allows a function to call another function.
    >A callback function can run after another function has finished.

Function Sequence:---
    >JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.*/
    //This example will end up displaying "Goodbye":-
function myDisplayer1(some) {
    document.getElementById("demo1").innerHTML = some;
  }
  
  function myFirst() {
    myDisplayer1("Hello");
  }
  
  function mySecond() {
    myDisplayer1("Goodbye");
  }
  myFirst();
  mySecond();
/*
Sequence Control:---
    >Sometimes you would like to have better control over when to execute a function.
    >Suppose you want to do a calculation, and then display the result.
    >You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:- */
    function myDisplayer2(some) {
        document.getElementById("demo2").innerHTML = some;
      }
      
      function myCalculator2(num1, num2) {
        let sum = num1 + num2;
        myDisplayer2(sum);
      }
      
      myCalculator2(5, 5);
/*  The problem is that you cannot prevent the calculator function from displaying the result.
    Now it is time to bring in a callback. */

/*  Using a callback, you could call the calculator function (myCalculator) with a callback (myCallback), and let the calculator function run the callback after the calculation is finished:- */
    function myDisplayer3(some) {
      document.getElementById("demo3").innerHTML = some;
    }
    
    function myCalculator3(num1, num2, myCallback) {
      let sum = num1 + num2;
      myCallback(sum);
    }
    
    myCalculator3(5, 5, myDisplayer3);
/*
    >In the example above, "myDisplayer3" is a called a callback function.
    >It is passed to "myCalculator()"" as an argument. 
    >Note:--
        When you pass a function as an argument, remember not to use parenthesis.
        Right: myCalculator(5, 5, myDisplayer);
        Wrong: myCalculator(5, 5, myDisplayer());
*/

/*
    >In the real world, callbacks are most often used with asynchronous functions.
    >A typical example is JavaScript setTimeout() or setInterval().
*/
setTimeout(myFunction, 3000);
    //setTimeout(function() { myFunction("I love You !!!"); }, 3000); ["you can use this way also"]
function myFunction() {
  document.getElementById("demo4").innerHTML = "I love You !!";
}
/*
    >In the example above, myFunction is used as a callback.
    >myFunction is passed to setTimeout() as an argument.
    >3000 is the number of milliseconds before time-out, so myFunction() will be called after 3 seconds. 
*/

//Example of "Callback" :---
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
      console.log("Loaded script with SRC: " + src)
      callback(null,src);
    }
//Handeling errors:--[incase we make an error]
    script.onerror = function() {
    callback(new Error("Src got some error")); //if src has some error then it shows that,yeah src has some error and passes to respective callback function.
    console.log("Error loading script with SRC: " + src);
    }

    document.body.appendChild(script);
  }
  
  function hello(error,src) {
    if (error) {
        console.log(error)
        return
      }
    alert('Hello World!' + src);
  }
  
  function goodmorning(error,src) {
    if (error) {
        console.log(error)
        return
      }
    alert('Good morning' + src);
  }
  
  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning);

/*
Pyramid od Doom:--
  >When we have callback inside callbacks.the code gets difficult to LockManager. 
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap1@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error,src) {
    if (error) {
        console.log(error)
        return
      }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap2@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error,src) {
        if (error) {
        console.log(error)
        return
        }
          loadScript("https://cdn.jsdelivr.net/npm/bootstrap3@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error,src) {
          if (error) {
          console.log(error)
          return
          }
          }
        }
      }
    ); 

  >As calls become more nested , the code becomes deeper and incresingly more difficult to manage.
  >This is sometimes called "Callback hell" or "Pyramid of doom".
*/

/*
Callback Alternatives:-
    >With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other tasks in paralell.
    >But, asynchronus programmes are difficult to write and difficult to debug.
    >Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript, asynchronous programming is solved using Promises instead.
*/