/*
>The localStorage object allows you to save key/value pairs in the browser.
>Note:---
    -The localStorage object stores data with no expiration date.
    -The data is not deleted when the browser is closed, and are available for future sessions.
*/
let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")

localStorage.setItem(key, value) //store key/value pair

console.log(`The value at ${key} is ${localStorage.getItem(key)}`) //["${key}" --> back_ticks]
//get the value by key 
if (key == "red" || key == "blue") {
        localStorage.removeItem(key) //remove the key with it's value
}

if (key == 0) {
        localStorage.clear() //delete everything
} 

console.log(localStorage.key(1)); //get the key on a given position
console.log(localStorage.length); //number of stored items

/*
Note:---
    -Both key and values must be strings.
    -We can use the two JSON methods to store objects in localStorage.
    -JSON.Stringfy(object) == converts objects to JSON strings.
    -JSON.parse(String) == converts Strings to JSON objects(must be a valid JSON).
*/
/*
>Storage event:---
    -When the data gets updated in localStorage or sessionStorage,storage event triggers.
    -We can listen updates event of window which is triggered when updates are made to the same storage from other documents.
*/
window.onstorage = (e) => {
    alert("changed")
    console.log(e)
}