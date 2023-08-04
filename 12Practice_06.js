//01. write a programe to take input of age as a value from user and use alert to tell him if he can drive!
let age=prompt("enter your age:");
age=Number.parseInt(age);

const candrive =(age)=>{
 return age>=18?true:false;
}

if(candrive(age)){
    alert("yes you can drive!");
}
else{
    alert("NO,you can't drive!");
}


//02. use confirm to ask user if he wants to see the prompt again and again!
   let run_again=true;
while(run_again){
    let age=prompt("enter your age:");
    age=Number.parseInt(age);
    //03.use console.error to log the error if the age is negative!
    if(age<0){
        console.error("enter a valid age!");
        break;
    }
    if(candrive(age)){
        alert("yes you can drive!");
    }
    else{
        alert("NO,you can't drive!");
    }
    run_again=confirm("do you want to continue?");
}


//04. change the url to google.com(redirection) if user enters a number greater than 4!
let number=prompt("enter a number:");
    number=Number.parseInt(number);
    if(number>4){
        location.href="https://www.google.com";
    }
    else{
        alert("number is less than 4!");
    }

//05. change the background color as the user input!
let color=prompt("enter color:");
     document.body.style.background=color; 