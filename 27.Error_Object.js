//For all the built in errors,the error object has two properties!
try{
    console.log(prabhat);
}
catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}

//Throwing an custom error
try {
    let age = prompt("Enter your age")
    age = Number.parseInt(age) 
    if(age>50){
    throw new Error("This is probably not true")
    //we can also throw a particular error by using the built in constructor for standard errors:
        //let error=new SyntaxError(message)
        //or
        //let error=new ReferenceError(message)
    }
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}

console.log("The script is still running")
