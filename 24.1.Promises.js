/*
    >"I Promise a Result!"
    >"Producing code" is code that can take some time.
    >"Consuming code" is code that must wait for the result.
    >A Promise is a JavaScript object that links producing code and consuming code.

    >A promise is a "promise of code execution".
    >The code either executes or fails,in both the cases the subscriber will be notified.
    
    >Promise Syntax:-
        let myPromise = new Promise(function(Resolve,Reject){
        //"Producing Code" (May take some time)
        Resolve(); // when the job is finished successful
        Reject();  // when the job fails
        });

        //"Consuming Code" (Must wait for a fulfilled Promise)
        myPromise.then(
        function(value) { // code if successful  },
        function(error) { // code if some error  }
        );

    >Promise Object Properties:--
        -The Promise object supports two properties: state and result.
         myPromise.state	     myPromise.result
          "pending"             	undefined
          "fulfilled"	           a result value
          "rejected"	           an error object

    >You cannot access the Promise properties state and result.
    >You must use a Promise method to handle promises.
*/
let promise=new Promise(function(resolve,reject){
    console.log("Hello");
    resolve(56);
});
console.log("Hello One");
setTimeout(function(){
    console.log("Hello Two in 2 seconds");
},2000);
console.log("Hello Three");
console.log(promise);

