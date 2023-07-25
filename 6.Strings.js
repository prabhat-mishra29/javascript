// "BASICS":------------------
let name = "prabhat";
console.log(name);
console.log(name[0]);
let boy1="Abinash";
let boy2="Sumit";
console.log(boy1+" is a friend of "+boy2);
// We can insert variables directly in template literal,this is called "string interpolation".
let sentence=`boy1 is a friend of boy2`;
console.log(sentence);
let sentence1=`${boy1} is a friend of ${boy2}`;
console.log(sentence1);
console.log();

// "String Methods":------------------
//1.length:----
    let name1="Abhi";
    console.log(name1.length);
    name1="abhi\"";
    console.log(name1.length);
//2.toUppercase()
//3.toLowercase()
//4.slice():-------------
    let name2="Mishra";
    console.log(name2.slice(1,4));
    console.log(name2.slice(2));
//5.replace():-----------------
    console.log(name2.replace("sh","po"));
//6.concat():-----------------
    console.log(name.concat(" ",name2," is a good boy."));
//7.trim():------------------
    let name3="     lodu       ";
    console.log(name3.trim());

//  " String are immutable,means you can not chnage it further."

//8.includes():------(true/false)
    console.log(name2.includes("sh"));
    console.log();

//Examples:---------
   let str="please give me 1000";
   let amount=str.slice("please give me ".length);
   console.log(amount);
   console.log(typeof(amount)); //type:-- String
   amount=Number.parseInt(amount);
   console.log(typeof(amount)); //type:-- Number