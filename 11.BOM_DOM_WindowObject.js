/*
   >"Window Object" represents browser window and provides methods to control it. It is a global object.
   >"Window Object" has some properties and for better understanding you should check out w3school documentation! 
   >"Window Object" consists of three things:------- 1.DOM
                                                     2.BOM
                                                     3.javascript core
*/ 
console.log(window);
//gives all "Window Object" methods in console tab.

/*
DOM(document object model):-------------
  >DOM represents the page content as HTML.
  >With the object model, JavaScript gets all the power it needs to create dynamic HTML:--------
    -JavaScript can change all the HTML elements in the page.
    -JavaScript can change all the HTML attributes in the page.
    -JavaScript can change all the CSS styles in the page.
    -JavaScript can remove existing HTML elements and attributes.
    -JavaScript can add new HTML elements and attributes.
    -JavaScript can react to all existing HTML events in the page.
    -JavaScript can create new HTML events in the page.

    >HTML DOM methods are 'actions' you can perform (on HTML Elements).
    >HTML DOM properties are 'values' (of HTML Elements) that you can set or change.
*/

document.getElementById("id1").innerHTML="Hello World!";
//The getElementById Method:---- The most common way to access an HTML element is to use the id of the element.
//The innerHTML Property:---- The easiest way to get the content of an element is by using the innerHTML property.
document.body.style.background="green";

/*
BOM(browser object model):--------------
   >The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.
   >BOM represents additional objects provided by the browser(host envirnoment) for working with everything except the documnet.
   >The fuction alert/prompt/confirm also a part of BOM. 
*/