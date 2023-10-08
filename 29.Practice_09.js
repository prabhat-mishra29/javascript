//Write a programe to load a javascript file in a browser using promises. Use .then() to display an alert when the load is complete!
let loadScript= (src) => {
    return new Promise((resolve, reject) => {
            let script = document.createElement("script");
            script.src = src;
            document.body.appendChild(script);
            script.onload = (script) => {
                resolve("Script has been loaded sir :- "+src);
            }
            script.onerror = () => { 
                reject(new Error("Error hai bhai!"));
            }
    })
}

let p = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");
p.then((value)=>{
    alert(value);
})


//Same programe from previous question and use async/await syntax.
let loadScript1=async(src) => {
    return new Promise((resolve, reject) => {
            let script = document.createElement("script");
            script.src = src;
            document.body.appendChild(script);
            script.onload = (script) => {
                resolve("Script has been loaded sir :- "+src);
            }
            script.onerror = () => { 
                reject(new Error("Error hai bhai!"));
            }
    })
}
let prabhat=async()=>{
console.log(new Date().getMilliseconds());
let a=await loadScript1("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");
console.log(a);
console.log(new Date().getMilliseconds());
}
prabhat();

//crate a promise which rejects after 3seconds.use an async/await to get it's value.use a try catch to handle it's error!
let d=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(new Error("please this is not acceptable!"))
    },3000)
})

let e=async()=>{
    try{
     let c=await d;
     console.log(c);
    }
    catch(err){
     console.log("error has been handeled!");
    }
}
e()

//write a programe using promise.all() inside an async/await to await 3 promises.compare it's results eith the case where we await these promises one by one!
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value1");
    },4000);
});
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value2");
    },5000);
});
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value3");
    },7000);
});
let promise_all=async()=>{
console.time("run");
let v=await Promise.all([p1,p2,p3])
console.log(v);
console.timeEnd("run");
}
promise_all();