/*
>Two commonly used methods for a request-response between a client and server are: GET and POST.
    -GET - Requests data from a specified resource
    -POST - Submits data to be processed to a specified resource
>GET is basically used for just getting (retrieving) some data from the server. 
>Note: The GET method may return cached data.
>POST can also be used to get some data from the server. However, the POST method NEVER caches data, and is often used to send data along with the request.
*/
/*
To make a POST request,we need to use fetch options.
    1.method -> HTTP-method , eg:POST
    2.body -> the request body
*/

//Creating a resource:-
/*
let response=fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
response.then((value)=>{
    return value.json();
}).then((value)=>{
    console.log(value);
})
*/

//Creating a resource(using async & await):-
let create_todo=async ()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
    let result=await response.json();
    return result;
}

//Getting a resource
const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r = await response.json()
    return r
}

console.log(create_todo()); //"Returns a promise!"

let mainfun=async()=>{
    let todo=await create_todo()
    console.log(todo);
    console.log(await getTodo(5)) 
}
mainfun();