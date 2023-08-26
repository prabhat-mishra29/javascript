document.getElementById("first").className="yellow text_black";

/*
"classList":--
    >This property returns the CSS classnames of an element. */
    console.log(first.classList);
/*  
    1.add()	     --> Adds one or more tokens to the list
    2.contains() --> Returns true if the list contains a class
    3.remove()	---> Removes one or more tokens from the list
    4.toggle()	---> Toggles between tokens in the list
*/
function func1(){
    const list = document.getElementById("first").classList;
    list.add("red");
}
function func2(){
    document.getElementById("first").classList.remove("red");
}

 let x=document.getElementById("first").classList.contains("red");
 console.log(x);

 function func3() {
    document.getElementById("second").classList.toggle("red");
  }