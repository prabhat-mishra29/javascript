/*
Difference between console.log AND console.dir:------
    >console.log shows the element DOM tree.
    >console.dir shows the element as an object with it's properties.
*/
let a=document.getElementsByTagName("span");
console.log(a[0]);
console.dir(a[0]);
console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);

/*
"innerHTML property":----
    >This property sets or returns the HTML content (inner HTML) of an element. */
console.log(document.getElementById("demo1").innerHTML);
function myFunction1() {
    document.getElementById("demo1").innerHTML = "I have changed!";
  }

/*
"outerHTML property":----
    >This property sets or returns the HTML element, including attributes, start tag, and end tag. */
console.log(document.getElementById("demo2").outerHTML);
function myFunction2() {
    document.getElementById("demo2").outerHTML = "<h3>You changed me and my content!</h3>";
  }