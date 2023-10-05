//Promises Chaining :--
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("p1 promise");
        resolve(1);
    },2000);
    }).then((value)=>{
        console.log(value);
            let p2=new Promise((resolve,reject)=>{
            setTimeout(()=>{
            console.log("p2 promise");
            resolve(2);
            },2000); })
            return p2;
            }).then((value)=>{
                console.log(value);
                let p3=new Promise((resolve,reject)=>{
                setTimeout(()=>{
                console.log("p3 promise");
                resolve(3);
                },2000);})
                return p3;
                }).then((value)=>{
                    console.log(value);
                    })


//Re-write the loadscript function we wrote in the beginning of this chapter using promises
let loadScript= (src) => {
    return new Promise((resolve, reject) => {
            let script = document.createElement("script");
            script.src = src;
            document.body.appendChild(script);
            script.onload = (script) => {
                resolve("Script has been loaded sir");
            }
            script.onerror = () => { 
                reject(0);
            }
    })
}

let p = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");
p.then((value)=>{
    console.log(value);
    return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js");
}).then((value)=>{
    console.log("Second script ready");
    }).catch((error)=>{
        console.log("We are sorry but we are having problems loading this script");
        })
//ek ke badd ek .then .then karrte jao , purani value jabb fulfill hogi uski value agle .then ko milegi and so on! (like recursion)