/*
Alert Box :-------------------
An alert box is often used if you want to make sure information comes through to the user. */

/*
Prompt Box :-----------------
A prompt box is often used if you want the user to input a value before entering a page.

Syntax :-----------------------
window.prompt("sometext","defaultText"); 
*/
alert("enter the value of a!")
let a=prompt("enter a here:");
alert("type of a is : " +(typeof a));

let b=prompt("enter a number",56);
b=Number.parseInt(b);
document.write(b+" "+(typeof b)+"<br>"); 
//Writes one or more HTML expressions to a document in the specified window.

/*
Confirm Box:---------------------------
A confirm box is often used if you want the user to verify or accept something.
When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed. */
let c=confirm("Is this expression is correct or not ?");
if(c){
    alert("Yes,it is!");
    document.write("a : "+a);
}
else{
    alert("No");
    document.write("b : "+b);
}

//NOTE :-------- The exact location and look is determined by user which is a limitation!