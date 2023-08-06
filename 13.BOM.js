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
document.write("h : "+h+"<br>");
let w=window.innerWidth;
document.write("w : "+w);
/*
  Some other methods:---------------["LEARN THESE METHODS IN W3CHOOLS WEBSIRTE"]
    1.window.open() - open a new window 
        [syntax:-----  window.open(URL, name, specs, replace)]
        
    2.window.close() - close the current window
    3.window.moveTo() - move the current window
    4.window.resizeTo() - resize the current window
*/

/*
2.JS/Window Screen:---------------
  >The window.screen object contains information about the user's screen.
  >The window.screen object can be written without the window prefix.
  Properties:----
    1.screen.width:---This property returns the width of the visitor's screen in pixels.
    2.screen.height;------This property returns the height of the visitor's screen in pixels.
    3.screen.availWidth:-----This property returns the width of the visitor's screen, in pixels, minus interface    
                             features like the Windows Taskbar.
    4.screen.availHeight:---This property returns the height of the visitor's screen, in pixels, minus interface 
                             features like the Windows Taskbar.
    5.screen.colorDepth:----This property returns the number of bits used to display one color.
    6.screen.pixelDepth:---This property returns the pixel depth of the screen.
*/
let d1=screen.colorDepth;
document.write("<br>Screen color Depth: " +d1);
let d2=screen.pixelDepth;
document.write("<br>Screen pixel Depth: " +d2);
let d3=screen.width;
document.write("<br>Screen width: " +d3);
let d4=screen.height;
document.write("<br>Screen height: " +d4);
let d5=screen.availWidth;
document.write("<br>Screen available width: " +d5);
let d6=screen.availHeight;
document.write("<br>Screen available Height: " +d6);

/*
3.JS/Window Location:-------------------
  >The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.
  >The window.location object can be written without the window prefix.
  Properties:----
    1.location.href :-------- returns the href (URL) of the current page
    2.location.hostname :---- returns the domain name of the web host
    3.location.pathname :---- returns the path and filename of the current page
    4.location.protocol :---- returns the web protocol used (http: or https:)
    5.location.port :-------- returns the number of the internet host port (of the current page).
    6.location.assign() :---- loads a new document [same as window.open()]
*/
let l1=location.href;
document.write("<br>Location href: " +l1);
let l2=location.hostname;
document.write("<br>Location hostname: " +l2);
let l3=location.pathname;
document.write("<br>Location pathname: " +l3);
let l4=location.protocol;
document.write("<br>Location protocol: " +l4);
let l5=location.port;
document.write("<br>Location port: " +l5);

function newDoc1() {
  location.assign("https://www.google.com")
}
function newDoc2() {
  window.open("https://www.google.com","_parent");
}