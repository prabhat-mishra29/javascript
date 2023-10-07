setTimeout(()=>{
    console.log("Hacking wifi.... Please wait..." ) 
    }, 1000)
    
    try{
        console.log(rahul) ;
    }
    catch(error){
        console.log("Balle balle")
    }

    
    setTimeout(()=>{ 
            console.log("Fetching username and password.... Please wait..." );
    }, 2000) 
    
    setTimeout(()=>{ 
    console.log("Hacking Rahul's facebook id.... Please wait..." );
    }, 3000) 
    
    setTimeout(()=>{ 
    console.log("Username and password of Rahul (+919356700001) fetched.... Please wait..." );
    }, 4000) 

/*
It works like this:--
1.first the code in try is executed.
2.if there is no error,catch is ignored else catch is executed.
3.try catch works synchronously.
4.if an exeception happens in scheduled code,like in setTimeout,then try..catch won't catch it.
*/

//It won't work! 
try{
    setTimeout(()=>{ 
            console.log(rahul)  
    }, 100)
}
catch(error){
    console.log("Balle balle")
}
//It we do this way:- 
try{
    setTimeout(()=>{ 
        try{
            console.log(rahul); 
        }
        catch(error){
            console.log("errorrrrrrrrrrrrrrrrrrrr")
        }
    }, 100)
}
catch(error){
    console.log("Balle balle")
}