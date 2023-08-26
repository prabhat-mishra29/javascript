//Basic way we can add some element in the DOM
let a=document.getElementsByClassName("container")[0];
a.innerHTML=a.innerHTML+"<h1>Hello World</h1>";

//Another way we can did this :---
let b=document.getElementsByClassName("container")[1];
let div=document.createElement("div");
div.innerHTML="<h1>Hello Everyone</h1>";

//e.append(element):--- append at the end of the node e.
//e.prepend(element):-- insert at the begining of the node e.
//e.before(element):--- insert before node e.
//e.after(element):---- insert after node e.
//e.replaceWith(element):-- node e replace with given node.
//e.replaceChild(new, old):-- Replace an HTML element of node e.
//e.remove():-- remove node e.
//e.removeChild(element) :--- Remove an HTML element of node e.

/*
b.append(div);
b.prepend(div);
b.before(div);
b.after(div);
b.remove();
b.removeChild(div);
*/
b.replaceWith(div);

/*Another way we can did this :---
    InsertAdjacentHTML / InsertAdjacentElement :--- */
        let c=document.getElementById("id1");
        //c.insertAdjacentHTML("beforebegin","<h1>Prabhat Mishra</h1>");
        //id1.insertAdjacentHTML("beforeend","<h1>Prabhat Mishra</h1>");
        //c.insertAdjacentHTML("afterbegin","<h1>Prabhat Mishra</h1>");
        id1.insertAdjacentHTML("afterend","<h1>Prabhat Mishra</h1>");