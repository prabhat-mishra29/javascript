/*
The HTML DOM (Document Object Model) :--------------
    >When a web page is loaded, the browser creates a Document Object Model of the page.
    >It defines:--
        -The HTML elements as objects.
        -The properties of all HTML elements.
        -The methods to access all HTML elements.
        -The events for all HTML elements.
    >In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.
    >The HTML DOM model is constructed as a tree of Objects.
    >There are 3 main type of nodes in the DOM tree.
        -TEXT node
        -ELEMENT node
        -COMMENT node
     ->Tags are element nodes (or just elements) and form the tree structure.
     -><html> is at the root, then <head> and <body> are its children, etc. 
     ->The text inside elements forms text nodes, labelled as #text . A text node contains only a string.
     ->Text node is a always a leaf node of the tree.
*/
// WALKING WITH "DOM" :----------------
console.log(document.body);  // ---->Returns the <body> element
console.log(typeof(document.body));
console.log(document.head);  // ---->Returns the <head> element
console.log(document.documentElement); // ---->Returns the <html> element or you can say that all elements inside <html> element
console.log(typeof(document.documentElement));
/*
NOTE:--
    document.body; can sometimes be null if the javascript is written before body tag.
*/


/*
HTML Nodes vs Elements :------------
    >In the HTML DOM (Document Object Model), an HTML document is a collection of nodes with (or without) child nodes.
    >Nodes are element nodes, text nodes, and comment nodes.
    >Whitespace between elements are also text nodes.
    >Elements are only element nodes.
*/
/*
childNodes vs children:-------------
    >childNodes returns child nodes (element nodes, text nodes, and comment nodes).
    >children returns child elements (not text and comment nodes).
    >descendant nodes:- All nested elements,children,their childen and so on.
*/
/*
Siblings vs Element Siblings:---------
    >Siblings are "brothers" and "sisters".
    >Siblings are nodes with the same parent (in the same childNodes list).
    >Element Siblings are elements with the same parent (in the same children list).
*/
console.log(document.body.childNodes); //All child nodes
console.log(document.body.firstChild); //First child node
console.log(document.body.lastChild);  //Last child node
console.log(document.body.childNodes[0]); //same as firstChild
console.log(document.body.childNodes[document.body.childNodes.length-1]); //same as lastChild
console.log(document.body.childNodes[1].nextSibling); //next child node
console.log(document.body.childNodes[2].previousSibling);//previous child node
console.log(document.body.firstChild.parentNode); 

console.log(document.body.children);//All child elements
console.log(document.body.firstElementChild); //First child element
console.log(document.body.lastElementChild);  //Last child element
console.log(document.body.children[0]); //same as firstChild element
console.log(document.body.children[document.body.children.length-1]); //same as lastChild element
console.log(document.body.children[1].nextElementSibling); //next child element
console.log(document.body.children[2].previousElementSibling);//previous child element
console.log(document.body.firstElementChild.parentElement); 
/*
parentNode vs parentElement:-------------
    >The parentNode property returns the parent node of an element or node.
    >The parentElement property returns the parent element of the specified element.
    >The difference between parentElement and parentNode, is that parentElement returns null if the parent node is not an element node.
*/
console.log(document.body.parentNode); // Returns the <html> element
console.log(document.body.parentElement); // Returns the <html> element
console.log(document.documentElement.parentNode); // Returns the Document node
console.log(document.documentElement.parentElement); // Returns null (<html> does not have a parent ELEMENT node)


/* 
hasChildNodes() :---
    >method returns true if the specified node has any child nodes, otherwise false. */
let answer =document.body.hasChildNodes();
console.log(answer);
/*
NOTE:--
    >An HTMLCollection or NODELIST may look like an array, but it is not.
    >You can loop through an HTMLCollection or NodeList and refer to its elements with an index.
    >ut you cannot use Array methods like push(), pop(), or join() on an HTMLCollection or NodeList.
*/
let arr1=[];
arr1=Array.from(document.body.childNodes);
console.log(arr1);
let arr2=[];
arr2=Array.from(document.body.children);
console.log(arr2);
console.log("Type of document.body.childNodes is : "+typeof(arr1));
console.log("Type of document.body.children is : "+typeof(arr2));


/*
DOM COLLECTION AND NODELIST:------
    >A NodeList and an HTMLcollection is very much the same thing.
    >Both are array-like collections (lists) of nodes (elements) extracted from a document. The nodes can be accessed by index numbers. The index starts at 0.
    >Both have a length property that returns the number of elements in the list (collection).
    >An HTMLCollection is a collection of document elements.
    >A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).
    >HTMLCollection items can be accessed by their name, id, or index number.
    >NodeList items can only be accessed by their index number.
    >An HTMLCollection is always a live collection. 
      -Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.
    >A NodeList is most often a static collection. 
      -Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.
    >The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.
    >The querySelectorAll() method returns a static NodeList.
    >The childNodes property returns a live NodeList.
*/
/*
NOTE:---
    >Use "$0" in the console to refer to the current element.
    >Use "$1" in the console to refer to the previous element.
*/


/*
SEARCHING THE DOM:----------
    >"getElementById()" :-- This method returns an element with a specified value. 
                         -- If two or more elements with the same id exist, getElementById() returns the first.
    >"getElementsByClassName()" :-- This method returns a collection of elements with a specified class name(s).
    >"getElementsByName()" :-- This method returns a collection of elements with a specified name.
    >"getElementsByTagName()" :-- This method returns a collection of all elements with a specified tag name.
    >"querySelector()" :-- This method returns the first element that matches a CSS selector.
    >"querySelectorAll()" :-- This method returns all elements that matches a CSS selector(s).
*/
document.getElementById("demo").style.background="yellow";

let b=document.getElementsByClassName("example_color");
    b[0].style.background="lightblue";

let c=document.getElementsByTagName("h4");
    c[0].style.background="pink";

let elements = document.getElementsByName("fname");
document.getElementById("demo1").innerHTML = elements[0].tagName;

document.querySelector(".example1").style.background= "red";

let a=document.querySelectorAll(".example2");
for(let i=0;i<a.length;i++){
    a[i].style.background="green";
}


//SOME DOM METHODS :-----
/*
1.element.matches():----
    >This method returns true if an element matches a specific CSS selector(s). */
let d=document.getElementById("id1");
console.log(d.matches(".class1"));
/*
2.element closest():---- 
    >This method searches up the DOM tree for elements which matches a specified CSS selector.
    >This method starts at the element itself, then the anchestors (parent, grandparent, ...) until a match is found.
    >This method returns null() if no match is found. */
let e=document.getElementById("myElement1");
console.log(e.closest(".container"));
e.style.border = "2px solid black";
/*
3.element.contains():----
    >This method returns true if a node is a descendant of a node.
    >This method returns false if not.*/
let sp = document.getElementById("mySPAN");
let f = document.getElementById("myDIV").contains(sp);
console.log(f);