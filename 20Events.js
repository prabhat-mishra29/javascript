/*
Event:----
    >An event is a signal that something has happened.
    >All the DOM events are :--
        -Mouse events :-- click,contextmenu(right click),mouseover/mouseout,mousedown/mouseup,mousemove
        -Keyboard events :-- keydown and keyup
        -form element events :-- submit,focus
        -Document events :-- DOMContentLoaded
*/

/* addEventListener(event,handler) :---- 
   This method attaches an event handler to an element. */
/* removeEventListener(event,handler) :---
   This method attaches an event handler to an element. */

//NOTE :---  Handeler must be referencing to same function object for this to work. 

/*
    btn.addEventListener("click", function(){
      alert("hello world1");
    });  

    [Both are referencing to different functions]

    btn.addEventListener("click", function(){
        alert("hello world2");
      });
*/
let x=function(){
    alert("hello world1");
  };
let y=function(){
    alert("hello world2");
};
//Note:-By using addEventListener we can use multiple 'alert' at a time!
btn.addEventListener("click",x);
btn.addEventListener("click",y);
  let a=prompt("enter a number you like : ");
  if(a==2){
    btn.removeEventListener("click",x);
  }