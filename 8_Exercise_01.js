let x=prompt("enter a number:");
x=Number.parseInt(x);

/* return a random number of digits:
let y=Math.random();
*/

/*
Return a random number between 0 and 10:
let y = Math.random() * 10; 
 */

/*
Return a random number between 0 and 100: */
let y = Math.random() * 100; 
/*convert a float number to the whole number in JavaScript: */
y=Math.floor(y);

let count=0;

while(x!=y){
    if(x>y){
        console.log("greater number!");
        x=prompt("enter a smaller number:");
        x=Number.parseInt(x);
        count++;
    }
    else if(x<y){
        console.log("smaller number!");
        x=prompt("enter a greater number:");
        x=Number.parseInt(x);
        count++;
    }
}
    console.log("no of guesses :"+count);