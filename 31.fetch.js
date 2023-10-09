/*
>Javascript can be used to send and retreve information from the network when needed(AJAX).
    -AJAX = Asynchronous JavaScript And XML.
    -AJAX is not a programming language.
    -AJAX just uses a combination of:
        >A browser built-in XMLHttpRequest object (to request data from a web server)
        >JavaScript and HTML DOM (to display or use the data)
    -AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.
>The fetch() method starts the process of fetching a resource from a server.
>The fetch() method returns a Promise that resolves to a Response object.
> No need for XMLHttpRequest anymore.
    
    syntax:-
        let promise=fetch(url,[options])
        -without options,a get request is sent.
*/

/*
>Getting a response is a 2-stage process.   
    -An object of response class containing "Status" & "ok" properties.
        >status - The http status code,eg.200
        >ok-boolean ,true if the http status code is 200-299
    -After that we need to call another method to access the body in different formats:
        >response.text() - read & return the text.
        >response.json() - parse the response as JSON.
        >Other methods include response.fromData(),response.blob(),response.arrayBuffer() etc.
>NOTE:--
    -We can use only one body.reading method.
    -Example if we have already got the response with response.text() then reseponse.json() won't work.

>Response headers:- These are available in response.headers .
>Request headers:- To se t a request header in fetch , we can use the headers option.
    "basically in "Request headers" hmm kuch authentication dete hain request ki torr pai headers main,joo apko response hota hai wohh response headers hai!" 
    let res=fetch(url,{
        headers:{
            Authentication:'Secret'
        }
    });
    [option] is an object whose key is headers and it's value is also an object.

    */
let p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((response) => { 
        console.log(response.status)
        console.log(response.ok)
        console.log(response.headers)
        //console.log(response.text()) "Ek baar text() method run hogya toh json nai hoga. Either text() karoo ya phir json(),dono mai se ek karoo!"
        return response.json()
}).then((response) => {
        console.log(response)
})