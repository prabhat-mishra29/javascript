/*
>The sessionStorage object let you store key/value pairs in the browser.
>Note:---
    -The sessionStorage object stores data for only one session.
    -(The data is deleted when the browser is closed).
*/

let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")
sessionStorage.setItem(key, value)//store key/value pair
console.log(sessionStorage.getItem("name"));//get the value by key 
if (key == "red" || key == "blue") {
    sessionStorage.removeItem("name")//remove the key with it's value
}

if (key == 0) {
    sessionStorage.clear() //delete everything
} 

