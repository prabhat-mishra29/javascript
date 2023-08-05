/*
    1.JS Window
    2.JS Screen
    3.JS Location
    4.JS History
    5.JS Navigator
    6.JS Popup Alert
    7.JS Timing
    8.JS Cookies
*/
/*
 1.JS window:-----------------------------
   >The window object is supported by all browsers. It represents the browser's window.
   >All global JavaScript objects, functions, and variables automatically become members of the window object.
   >Global variables are properties of the window object.
   >Global functions are methods of the window object.

   Even the document object (of the HTML DOM) is a property of the window object:---
    window.document.getElementById("header");
    is the same as:
    document.getElementById("header");

 Window Size:----------
 Two properties can be used to determine the size of the browser window.
   a)window.innerHeight - the inner height of the browser window (in pixels)
   b)window.innerWidth - the inner width of the browser window (in pixels)
*/
let h=window.innerHeight;
alert("h : "+h);
document.write("h : "+h+"<br>");
let w=window.innerWidth;
alert("w : "+w);
document.write("w : "+w);
/*
Some other methods:---------------
    1.window.open() - open a new window
    2.window.close() - close the current window
    3.window.moveTo() - move the current window
    4.window.resizeTo() - resize the current window
*/
