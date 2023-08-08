/*
Use javascript to create a game of stone , paper & scissor.The game should ask you to enter S ,P or C.The computer
should be able to randomly generate S ,P or C and declare win or lose using alert.Use confirm and prompt wherever
requried !
*/
alert("S : stone ; P : papper ; C : scissor");
let user = prompt("Enter S, P or C");
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "P", "C"][cpuI];
 //Generate random between three characters!

const match = (cpu, user)=>{
  if(cpu === user){
    return "Nobody";
  }
  else if(cpu === "S" && user==="P"){
    return "user";
  }
  else if(cpu === "S" && user==="C"){
    return "cpu"
  }
  else if(cpu === "P" && user==="S"){
    return "cpu"
  }
  else if(cpu === "P" && user==="C"){
    return "user"
  }
  else if(cpu === "C" && user==="S"){
    return "user"
  }
  else if(cpu === "C" && user==="p"){
    return "cpu"
  }
}
let result = match(cpu, user);
document.write(`CPU:${cpu} <br> User:${user} <br>The winner is: ${result.toUpperCase()}` )