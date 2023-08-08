/*
Use javascript to create a game of stone , paper & scissor.The game should ask you to enter S ,P or C.The computer
should be able to randomly generate S ,P or C and declare win or lose using alert.Use confirm and prompt wherever
requried !
*/
alert("S : stone ; P : papper ; C : scissor");

let x=true;
while(x){
game();
let c=confirm("Do you want to continue ?");
if(c){
  game();
  x=true;
}
else{
  alert("THANK YOU!");
  x=false;
}
}


function game(){
let a=prompt("Enter : ");
if(a=="S"){
    a=1;
    let b = Math.floor((Math.random() * 3) + 1);
    if(b==1){
        alert("DRAW & RANDOM = S");
    }
    else if(b==3){
        alert("WIN & RANDOM = C");
    }
    else{
        alert("LOSS & RANDOM = P");
    }
}
else if(a=="P"){
    a=2;
    let b = Math.floor((Math.random() * 3) + 1);
    if(b==2){
        alert("DRAW & RANDOM = P");
    }
    else if(b==1){
        alert("WIN & RANDOM = S");
    }
    else{
        alert("LOSS & RANDOM = C");
    }
}
else{
    a=3;
    let b = Math.floor((Math.random() * 3) + 1);
    if(b==3){
        alert("DRAW & RANDOM = C");
    }
    else if(b==2){
        alert("WIN & RANDOM = P");
    }
    else{
        alert("LOSS & RANDOM = S");
    }
}
}

