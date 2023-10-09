/*
What are Cookies?
    >Cookies are data, stored in small text files, on your computer.
    >When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.
    >Cookies were invented to solve the problem "how to remember information about the user":
    >When a user visits a web page, his/her name can be stored in a cookie.
    >Next time the user visits the page, the cookie "remembers" his/her name.
    >Cookies are saved in name-value pairs like:
        username = John Doe
    >When a browser requests a web page from a server, cookies belonging to the page are added to the request. This way the server gets the necessary data to "remember" information about users.
*/
console.log(document.cookie)
document.cookie = "name=harry1122334400"
document.cookie = "name2=harry11223344002"
document.cookie = "name=harry" //change value of name
/*
//take key and value from user and add it in cookie
    let key1 = prompt("enter your key")
    let value1 = prompt("enter your value")
    document.cookie = `${(key1)}=${(value1)}` //[if you use '$',';','%' in key  or value it will not consider!]
    console.log(document.cookie)
*/
//encodeURIComponent:-- helps keep valid formating.
let key= prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${(key)}=${(value)}` //[if you use '$',';','%' in key  or value it will not consider!]
console.log(document.cookie)