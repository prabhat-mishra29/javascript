/*
"hasAttribute()":----
    >This method returns true if the attribute exists, otherwise false. */
let a=document.getElementById("myBtn");
console.log(a.hasAttribute("onclick"));
/*
"getAttribute()":----
    >This method returns the value of an element's attribute. */
console.log(a.getAttribute("onclick"));  
/*
"setAttribute()":-----
    >This method sets a new value to an attribute.
    >If the attribute does not exist, it is created first. */
function myFunction(){
    a.setAttribute("class","democlass"); 
}
/*
"removeAttribute()":-----
    >This method removes an attribute from an element. */
function myFunction2() {
    document.getElementsByTagName("H1")[0].removeAttribute("class"); 
}
/*
"hasAttributes()":-----
    >This method returns true if a node has attributes, otherwise false.
    >This method always returns false if the node is not an element node. */
console.log(document.getElementsByTagName("div")[0].hasAttributes());
/*
"element.attributes":-----
    >collection of all attributes. */
console.log(document.getElementsByTagName("H1")[0].attributes);

//CUSTOM ATTRIBUTE:-
console.log(first.dataset);
console.log(first.dataset.game);
console.log(first.dataset.player);