// You can not use 'prompt','alert','confirm' in vs-code directly,we can use it through <script> tag or in 'console'! 

// if :----------
  let a=prompt("Enter your age:");
  a=Number.parseInt(a);
  if(a>0){
    alert("you can vote!");
  }
  else{
    alert("NO,you can not vote!")
  }

//if-else:-------
let b=prompt("Enter your age:");
  b=Number.parseInt(b);
  if(b<18){
    alert("you can not drive!");
  }
  else if(b>=18 && b<52){
    alert("you can drive!");
  }
  else{
      alert("old citizen");
  }

  //ternary operator:------------
  let c=prompt("Enter your age:");
  c=Number.parseInt(c);
  (c>10)? alert("big") : alert ("small");

  //switch:------------
  let d=prompt("Enter your age(11-15):");
  c=Number.parseInt(d);
  switch(c){
    case 11: alert("your age is 11"); break;
        case 12:alert("your age is 12");break;
            case 13:alert("your age is 13");break;
                case 14:alert("your age is 14");break;
                    case 15:alert("your age is 15");break;
  }
