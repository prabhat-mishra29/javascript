// value of a javascript variable can be changed during the execution of a programe!

/*When to Use var, let, or const?  :-------
   1. Always declare variables
   2. Always use const if the value should not be changed
   3. Always use const if the type should not be changed (Arrays and Objects)
   4. Only use let if you can't use const
   5. Only use var if you MUST support old browsers. */

/* 'var' is globaly scoped & can be updated and re-declared within it's scope. */
var a=1;
console.log(a);
var a="hello";
console.log(a);
{
 var a=2;
 console.log(a);
}
console.log(a);
var a1=3;
console.log(a+a1);  // sum of 'a' & 'a1'
console.log();


/* 'let' and 'const' are block scope. */
let b=1;
console.log(b);
// 'let' can be updated but not re-declared
b=4;
console.log(b);
// let b=6;  cannot be re-declared
{
    const b=9;
    console.log(b);
}
console.log(b);
let b1=10;
console.log(b+b1);  // sum of 'b' & 'b1'
console.log();

const c=7;
console.log(c);
// c=8;  cannot be updated
// const c=8;  cannot be re-declared
const c1=8;
console.log(c+c1);  // sum of 'c' & 'c1'
console.log();

/* 
JavaScript has 8 Datatypes:------
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The object data type can contain:
1. An array
2. An object
3. A date 
*/

/*1.Strings:-------
        A string (or a text string) is a series of characters like "John Doe".
        Strings are written with quotes. You can use single or double quotes.   */
        let carName1 = "Volvo XC60";   console.log(carName1);
        let carName2 = 'Volvo XC60';   console.log(carName2);

        // Single quotes inside double quotes:
        let answer1 = "He is called 'Johnny'";  console.log(answer1);
        // Double quotes inside single quotes:
        let answer2 = 'He is called "monty"';  console.log(answer2);
        // Escape senetnce
      //let answer3 = 'He is called 'Johnny'';  "Gives you error!"
        let answer3 = 'He is called \'rahul\'';  console.log(answer3);
        console.log();
        console.log(answer1+"\n"+answer3);
        console.log("hello prabhat! it's "+7+" Good morning!");
        console.log();

/*2.Numbers:------
        All JavaScript numbers are stored as decimal numbers (floating point).
        Numbers can be written with, or without decimals.    */
        let x1 = 34.00;   console.log(x1);
        let x2 = 34;      console.log(x2);
      //Extra large or extra small numbers can be written with scientific (exponential) notation.
        let y = 123e5;    console.log(y);
        let z = 123e-5;   console.log(z);   
        console.log();
    /* Note:----
        Most programming languages have many number types:
        Whole numbers (integers):-
          byte (8-bit), short (16-bit), int (32-bit), long (64-bit)
        Real numbers (floating-point):-
          float (32-bit), double (64-bit).
        Javascript numbers are always one type:-
          double (64-bit floating point).                */

  /*Note:----  
        When adding a number and a string, JavaScript will treat the number as a string.
        JavaScript evaluates expressions from 'left' to 'right'.    */
        let v1 = 16 + "Volvo";      console.log(v1);   // let v1 = "16" + "Volvo";
        let v2 = "Volvo"+ 16;       console.log(v2);   // let v2 = "Volvo" + "16";
        let v3 = 16 + 4 + "Volvo";  console.log(v3);   // let v3 = ("20"(1st add two nums=20) + "Volvo"); 
        let v4 = "Volvo" + 16 + 4;  console.log(v4);   // let v4 =("Volvo" + "16")+ "4" ;
        console.log();

/*3.Bigint:-----
        JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number. */
        let x = BigInt("123456789012345678901234567890");   console.log(x); console.log(); 

/*4.Booleans:---------
        Booleans can only have two values: true or false.*/
        let x9=true;    console.log(x9);
        let y9=false;   console.log(y9);
        a=4,b=5;        console.log(a==b);  console.log();

/*5.Undefined:-----------
        In JavaScript, a variable without a value, has the value undefined. The type is also undefined.*/
        let car;                   console.log(car);
        let car1=undefined;        console.log(car1); console.log();

/*6.Empty/Null Value:---
        An empty value has nothing to do with undefined.
        An empty string has both a legal value and a type. */
        let car2="";                   console.log(car2); // Empty string means value is nothing but typr is string!
        let car3=null;                 console.log(car3); // Null means value is null and type is null
        console.log();

/*7.Symbols:--------
       we will learn about 'symbol' after some period! */

       console.log(carName1,x1,x,x9,car,car3);
       console.log();


       
/*8.1An array:-------
        JavaScript arrays are written with square brackets.
        Array items are separated by commas.*/
        const cars = ["Saab", "Volvo", "BMW",12];
        console.log(cars);
        console.log(cars[0]);
  // Here 'cars' acts as refernece of an array. 
  // Which means it can only refer to one array further can't be changed or updated! (incase of 'const' datatype)
  //         "cars = "   [gives you error]
  // However you can change it's element and add an element and delete an element!
        cars[1]=13;
        console.log(cars);
        cars[4]=31;
        console.log(cars);
  // suppose we have 4 elments in an array and we want to store an element in '6' place.
  // in case of c++ and java,it cannot happened in an array.But we can do this problem by using 'arraylist'.
  // but in 'javascript' we can do this in array because 'javascript' follows dynamic manner.
        cars[6]=13;
        console.log(cars);    

  //'cars' can refer to another array if you change the type of data it is used.
        let car69 = ["Saab", "Volvo", "BMW",12];
        console.log(car69);
        car69=["toyota", "nissan", "supra",13];
        console.log(car69);    console.log();


/*8.2An objects:-----------------
        JavaScript objects are written with curly braces {}.*/
        const person = { firstName:"John",
                         lastName:"Doe",
                         age:50, 
                         eyeColor:"blue" };
        console.log(person);
        console.log(person["firstName"]);
        console.log(person.eyeColor);
  // Here 'person' acts as refernece of an object.
  // Which means it can only refer to one object further can't be changed or updated! (incase of 'const' datatype)
  //         "person = "   [gives you error]
  // However you can change it's element and add an element and delete an element! 
        person.firstName="prabhat"; 
        console.log(person);
        person.address="rkl";   
        console.log(person);   console.log();
  // Basically you can say that 'An object' behaves same as 'structure' in c.
  
  //'person1' can refer to another object if you change the type of data it is used.
        let person1 = { firstName:"arpit",
                         lastName:"rath",
                         age:25, 
                         eyeColor:"black" };
        console.log(person1); 
        person1 = { firstName:"abinash",
                         lastName:"tripathy",
                         age:26, 
                         eyeColor:"blue" };
        console.log(person1);    
        console.log();          


/* The "typeof" Operator:-----
    You can use the JavaScript typeof operator to find the type of a JavaScript variable. */
        console.log(typeof(0));
        console.log(typeof(314));
        console.log(typeof(3.14));
        console.log(typeof(3+4));
        console.log(typeof(""));         
        console.log(typeof("heloooooo")); 
        console.log(typeof("hello everyone.how are you?")); 
        console.log(typeof(x));
        console.log(typeof(x9));
        console.log(typeof(a==b));  
        console.log(typeof(car)); 
        console.log(typeof(car1)); 
        console.log(typeof(null)); 
        console.log(typeof(car3));
        console.log(typeof(cars));
        console.log(typeof(person));   