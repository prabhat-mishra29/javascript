console.log(console); //gives you all methods of console objects
console.warn("WARNING!");//gives you a warning
console.error("ERROR!");//gives you a error
console.assert(2>3);//check condition if false then shows assertion
console.assert(3>2);
let xyz={
    fname:"Prabhat",
    lname:"Mishra",
}
console.table(xyz);
console.info("INFORMATOIN!");//gives you an information

/*time(label?: string | undefined): void
Starts a timer that can be used to compute the duration of an operation. Timers are identified by a unique label. Use the same label when calling timeEnd to stop the timer and output the elapsed time in suitable time units to stdout. For example, if the elapsed time is 3869ms, console.timeEnd() displays "3.869s".
console.time()   */
console.time("a");
console.timeEnd("a");

console.time("forloop");
for(let a=0;a<5;a++){
    console.log(a);
}
console.timeEnd("forloop");

/*
used to clear the console
   console.clear();
*/

//you can also do this in the "console" 