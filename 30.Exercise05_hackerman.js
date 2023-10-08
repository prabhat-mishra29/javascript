let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hacking wifi.... Please wait..." ) 
    }, 1000)
});   
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{ 
        resolve("Fetching username and password.... Please wait..." );
    }, 2000) 
}); 
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{ 
        resolve("Hacking Rahul's facebook id.... Please wait..." );
    }, 3000)
}); 
let p4=new Promise((resolve,reject)=>{
    setTimeout(()=>{ 
        resolve("Username and password of Rahul (+919356700001) fetched.... Please wait..." );
    }, 4000)
}); 

let main1=async()=>{
    let a=await p1;
    console.log(a);
    let b=await p2;
    console.log(b);
    let c=await p3;
    console.log(c);
    let d=await p4;
    console.log(d);
}
main1();