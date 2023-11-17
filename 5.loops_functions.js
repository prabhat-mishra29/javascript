/* Different Kinds of Loops:-----------------------------
   JavaScript supports different kinds of loops:----
      for      - loops through a block of code a number of times
      for/in   - loops through the properties of an object
      for/of   - loops through the values of an iterable object
      while    - loops through a block of code while a specified condition is true
      do/while - also loops through a block of code while a specified condition is true
*/


//for loop:----------------
for(let a=1;a<=35;a++){
     console.log(a);
}
console.log();


//FOR/IN :-----------------
    //"OBJECTES":-------------------------------
    let obj={ name:"Prabhat Mishra",
          age:20,
          address:"rourkela",
          branch:"IT"
    }
    console.log(obj);
    for(let a in obj){
        console.log(a); // "Gives you the properties that are involed in an object!"
    }
    for(let a in obj){
        console.log(obj[a]); // "Gives you the values of the properties that are involed in an object!"
    }
    console.log();

    //"ARRAYS":--------------------------------------
    const numbers = [45, 4, 9, 16, 25];
    console.log(numbers);
    for(let a in numbers){
        console.log(a); // "Gives you the indexes that are involed in an object!"
    }
    for(let a in numbers){
        console.log(numbers[a]); // "Gives you the values of the indexes that are involed in an object!"
    }
    console.log();


//FOR/OF :---------------------------
    //loops through the values of an iterable object.
    //It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more.
    
    //"ARRAYS":-------------------
    for(let a of numbers){
        console.log(a); // "Gives you the values that are involed in an object!"
    }

    let data="javascript"; //"STRING"
    for(let b of data){
        console.log(b); 
    }
    console.log();


// "WRITE A PROGRAME TO PRINT THE MARKS OF AN OBJECT "
    const marks={
        prabhat:23,
        abinash:34,
        sumit:45,
        arpit:56,
    }
     for(let a in marks){
        console.log("Mark of "+a+" is "+marks[a]);
     } 
    console.log(Object.keys(marks));
    for(let a=0;a<Object.keys(marks).length;a++){
        console.log("MARK of "+Object.keys(marks)[a]+" is "+marks[Object.keys(marks)[a]]);
    }
    console.log();


//FUNCTION:----------------------
 
function average(a,b){
    return (a+b)/2;
 }

 function greet(){
    console.log("helllooooo");
 }

 function sum(){
    return 2+3;
 }

 let a=2;
 let b=3;
 let c=4;
 console.log("avg of a & b =",average(a,b));
 console.log("avg of b & c =",average(b,c));
 console.log("avg of a & c =",average(a,c));
 greet();
 console.log("sum =",sum()); // Either you put ',' or '+'
 console.log();


 //"ARROW FUNCTION" :-----------------------------
 let mean=(a,b,c,d,e)=>{
     return (a+b+c+d+e)/5;
 }
 console.log("MEAN = "+mean(2,3,4,5,6));

 //Factory function
 function create_rectangle1(len,bre){
    return rectangle={
        length:len,
        bredth:bre,
        draw(){
            console.log("draw rectangle");
        }
    };
 }

 let rectangle_01=create_rectangle1(6,7);
 console.log(rectangle_01.length);
 console.log(rectangle_01.bredth);
 rectangle_01.draw();

//constructor function
  function create_rectangle2(len,bre){
    this.length=len;
    this.bredth=bre;
    this.draw=function (){
        console.log("draw rectangle");
    }
 }
 let rectangle_02=new create_rectangle2(8,9);
 console.log(rectangle_02.length);
 console.log(rectangle_02.bredth);
 rectangle_02.draw();