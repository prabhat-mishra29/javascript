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
  location.assign("https://www.google.com");
}
function newDoc2() {
  window.open("https://www.google.com","_parent");
}


/*
4.JS/Window History:------------
  >The window.history object contains the browsers history.
  >The window.history object can be written without the window prefix.
  >To protect the privacy of the users, there are limitations to how JavaScript can access this object.
  >Some methods:-----
    1.history.back() - same as clicking back in the browser
    2.history.forward() - same as clicking forward in the browser
*/
function newDoc3() {
  history.back();
}
function newDoc4() {
  history.forward();
}


/*
5.JS/Window Navigator:--------
  >The window.navigator object contains information about the visitor's browser.
  >The window.navigator object can be written without the window prefix.
  >some methods:--
    a)Browser Cookies:-------
      The 'cookieEnabled' property returns true if cookies are enabled, otherwise false. */
      let n1=navigator.cookieEnabled;
      document.write("<br><br>cookieEnabled is : " +n1); 

  /*b)Browser Application Name:----------
      The 'appName' property returns the application name of the browser. */
      let n2=navigator.appName;
      document.write("<br>appName is : " +n2 ); 
      /*Warning:---
         This property is removed (deprecated) in the latest web standard.
         Most browsers (IE11, Chrome, Firefox, Safari) returns Netscape as appName. */

  /*c)Browser Application Code Name:-------
      The 'appCodeName' property returns the application code name of the browser. */
      let n3=navigator.appCodeName;
      document.write("<br>appCodeName is : " +n3 ); 
      /*Warning:-----
         This property is removed (deprecated) in the latest web standard.
         Most browsers (IE11, Chrome, Firefox, Safari, Opera) returns Mozilla as appCodeName. */

  /*d)The Browser Engine:---------
      The 'product' property returns the product name of the browser engine. */
      let n4=navigator.product;
      document.write("<br>navigator.product is : " +n4 ); 
      /*Warning:-----
         This property is removed (deprecated) in the latest web standard.
         Most browsers returns Gecko as product. */

  /*e)The Browser Version:-----   
      The 'appVersion' property returns version information about the browser. */
      let n5=navigator.appVersion;
      document.write("<br>app version is : " +n5 );

  /*f)The Browser Agent:-------
      The 'userAgent' property returns the user-agent header sent by the browser to the server. */
      let n6=navigator.userAgent;
      document.write("<br>user Agent is : " +n6 );
      /*Warning:---------
         The information from the navigator object can often be misleading.
         The navigator object should not be used to detect browser versions because:
           1.Different browsers can use the same name.
           2.The navigator data can be changed by the browser owner.
           3.Some browsers misidentify themselves to bypass site tests.
           4.Browsers cannot report new operating systems, released later than the browser.   */

  /*g)The Browser Platform:-------
      The 'platform' property returns the browser platform (operating system). */
      let n7=navigator.platform;
      document.write("<br>platform is : " +n7 );

  /*h)The Browser Language:-------
      The 'language' property returns the browser's language. */
      let n8=navigator.language;
      document.write("<br>language is : " +n8 );

  /*i)Is The Browser Online ?:--------
      The 'onLine' property returns true if the browser is online. */
      let n9=navigator.onLine;
      document.write("<br>is online : " +n9 );

  /*j)Is Java Enabled?:-----
      The javaEnabled() method returns true if Java is enabled.  */
      let n10=navigator.javaEnabled();
      document.write("<br>is java enabled : " +n10 );


/*
7.JS Timing:------
  >The window object allows execution of code at specified time intervals.
  >These time intervals are called timing events.
  >The two key methods to use with JavaScript are:
    1.setTimeout(function, milliseconds)
    2.setInterval(function, milliseconds)
  
  >NOTE:---
    The setTimeout() and setInterval() are both methods of the HTML DOM Window object.

  1.The setTimeout() Method:----
    syntax:-window.setTimeout(function, milliseconds);
      >The first parameter is a function to be executed.
      >The second parameter indicates the number of milliseconds before execution.  */
      function newDoc5(){
        alert("Helloooo");
      }
    /*
  How to Stop the Execution?:-----
    >The clearTimeout() method stops the execution of the function specified in setTimeout().
    >If the function has not already been executed, you can stop the execution by calling the clearTimeout() method.
    >syntax:-window.clearTimeout(timeoutVariable);
      -The clearTimeout() method uses the variable returned from setTimeout(). */

  /*
  2.The setInterval() Method:-------
    >The setInterval() method repeats a given function at every given time-interval.
    >syntax:-window.setInterval(function, milliseconds);
      -The first parameter is the function to be executed.
      -The second parameter indicates the length of the time-interval between each execution.  */
      function newDoc6(){
        const d = new Date();
        alert(d.toLocaleTimeString());
      }
    /*
  How to Stop the Execution?:-------
      >The clearInterval() method stops the executions of the function specified in the setInterval() method.
      >syntax:--window.clearInterval(timerVariable);
        -The clearInterval() method uses the variable returned from setInterval(). */