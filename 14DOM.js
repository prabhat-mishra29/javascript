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
CHILDREN OF AN ELEMENT :---------
    >Direct as well as deeply nested elements of an element are called it's children.
    >child nodes:- Elements that are direct children.
                   for example - <head> and <body> are children of <html>.
    >descendant nodes:- All nested elements,children,their childen and so on. 
*/
console.log(document.body.firstChild); //First child element
console.log(document.body.lastChild);  //Last child element
console.log(document.body.childNodes); //All child nodes
console.log("Type of document.body.childNodes is :"+typeof(document.body.childNodes));
    // NOTE:-- A 'space-line' is treated as a #text node!
console.log(document.body.childNodes[0]); //same as first child element
console.log(document.body.childNodes[document.body.childNodes.length-1]); //same as last child element

// hasChildNodes() :---
//    method returns true if the specified node has any child nodes, otherwise false.
let answer =document.body.hasChildNodes();
console.log(answer);

/*NOTE:--
  -ChildNodes looks like an aray but it is not an array.It is a collection.So array methods wont work here.
  -We can use Array.form(collection) to convert it into an array.
*/
let arr=[];
arr=Array.from(document.body.childNodes);
console.log(arr);
console.log("Type of document.body.childNodes is :"+typeof(arr));
