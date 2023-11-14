        /* Expressions :------
        A fragment of code that produces a value is called an 'expression'.a
        Every value written literally is an Expression.  */
2;
2332;
"hello world!"

/* There are different types of JavaScript operators:---------
        1.Arithmetic Operators 
        2.Assignment Operators 
        3.Comparison Operators 
        4.String Operators 
        5.Logical Operators 
        6.Bitwise Operators 
        7.Ternary Operators(?)

     "Learn about it in "W3SCHOOLS"  */

//Arithmetic Operators :---------------------
let a=2;
let b=5;
console.log("a ** b =",a**b);

//Assignment Operators :---------------------
a+=b;
console.log("a += b =",a);    //a=7;
a%=b;
console.log("a %= b =",a);    //a=2;
a**=b;
console.log("a **= b =",a);   //a=32;

/*Comparison Operators :--------------------
 Operator	  Description
   ==	       equal to
  ===	       equal value and equal type
   !=	       not equal
  !==	       not equal value or not equal type
   >	       greater than
   <	       less than
   >=	       greater than or equal to
   <=	       less than or equal to
   ?	       ternary operator  */
console.log("a == b =",a==b);
console.log("a != b =",a!=b);
let c=6;
let d="6";
console.log("c === d =",c===d);
console.log("c !== d =",c!==d);