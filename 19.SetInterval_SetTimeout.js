/*
1.The setTimeout() Method:----
  syntax:-window.setTimeout(function, milliseconds,argument1,argument2);
    >The first parameter is a function to be executed.
    >The second parameter indicates the number of milliseconds before execution. 
    >The third and forth parameter indicate argument which is going to pass in the fuction. */
    function newDoc5(){
      alert("Helloooo");
    }
    const sum1=(a,b)=>{
        alert("SUM = "+(a+b));
    }
/*
How to Stop the Execution?:-----
  >The clearTimeout() method stops the execution of the function specified in setTimeout().
  >If the function has not already been executed, you can stop the execution by calling the clearTimeout() method.
  >syntax:-window.clearTimeout(timeoutVariable);
    -The clearTimeout() method uses the variable returned from setTimeout(). */

/*
2.The setInterval() Method:-------
  >The setInterval() method repeats a given function at every given time-interval.
  >syntax:-window.setInterval(function, milliseconds,argument1,argument2);
    -The first parameter is the function to be executed.
    -The second parameter indicates the length of the time-interval between each execution. 
    -The third and forth parameter indicate argument which is going to pass in the fuction. */
    function newDoc6(){
      const d = new Date();
      alert(d.toLocaleTimeString());
    }
    const sum2=(a,b)=>{
        alert("SUM = "+(a+b));
    }
  /*
How to Stop the Execution?:-------
    >The clearInterval() method stops the executions of the function specified in the setInterval() method.
    >syntax:--window.clearInterval(timerVariable);
      -The clearInterval() method uses the variable returned from setInterval(). */