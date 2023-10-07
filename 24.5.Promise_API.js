let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value1");
    },1000);
});
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value2");
    },3000);
});
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value3");
    },2000);
});


p1.then((value)=>{
    console.log(value);
});
p2.then((value)=>{
    console.log(value);
});
p3.then((value)=>{
    console.log(value);
});

/*  
>When all 3 of my promises are fulfilled ,then i want to see all the 3 values together!
>A solution that come in your mind that you may call .then of p3 and pass the value of p1 and p2.
    p3.then((value)=>{
        p1.then((value)=>{
            console.log(value);
        });
        p2.then((value)=>{
            console.log(value);
        });
        console.log(value);
    });

>Problem is that,the real world is abit messy.
*/

/*
Promise.all(promises):---
    >waits for all promises to resolve and returns the array of their results.
    >If any one fails ,it becomes the error & all other results are ignored. */
    let promise_all=Promise.all([p1,p2,p3])
    promise_all.then((value)=>{
        console.log(value);
    })
/*
Promise.allSettled(promises):---
    >waits for all the promises to settle and returns their resuls as an array of objects with status and value. */

    let p4=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error("Error agaya mere bhai!"));
        },4000);
    });
    let p5=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("value 5")
        },6000);
    });
    let p6=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("value 6");
        },5000);
    });
    let promise_settle=Promise.allSettled([p4,p5,p6])
    promise_settle.then((value)=>{
        console.log(value);
    })
/*
Promise.race(promises):---
    >waits for the first promise to settle and it's result/error becomes the outcome. */
    let promise_race=Promise.race([p1,p2,p3])
    promise_race.then((value)=>{
        console.log(value);
    })
/*
Promise.any(pomises):---
    >waits for the first promise to fulfill(& not rejected) , and it's result becomes the outcome.
    >Throws AggregrateError if all the promises are rejected.*/
    let promise_any=Promise.any([p4,p5,p6])
    promise_any.then((value)=>{
        console.log(value);
    })
/*
Promise.reject():---
    >Returns a new Promise object that is rejected with the given reason.  */
    let promise_reject=Promise.reject(new Error("ERRORRRRR!"))
    promise_reject.then((value)=>{
        console.log(value);
    })
/*
Promise.resolve():----
    >Returns a Promise object that is resolved with the given value. If the value is a thenable (i.e. has a then method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise, the returned promise will be fulfilled with the value. */
    let promise_resolve=Promise.resolve(69)
    promise_resolve.then((value)=>{
        console.log(value);
    })