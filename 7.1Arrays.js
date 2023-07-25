// "METHODS:----------------------"
let num=[1,2,3,4,5];
console.log(num);

//1.length:----------
console.log(num.length);

//2.toString():----------
console.log(num.toString());

//3.join():-----------------
//Adds all the elements of an array into a string, separated by the specified separator string.
console.log(num.join("_"),typeof(num.join()));

//4.pop():------------
//Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let r=num.pop();
console.log(num,r);

//5.push():------------
//Appends new elements to the end of an array, and returns the new length of the array.
let s=num.push(67);
console.log(num,s);

//6.shift():-----------
//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let t=num.shift();
console.log(num,t);

//7.unshift():-------------
//Inserts new elements at the start of an array, and returns the new length of the array.
let u=num.unshift(97);
console.log(num,u);

//8.delete:-----------
delete num[0];
console.log(num);

//9.concat():-----------
//(method) Array<number>.concat(...items: ConcatArray<number>[]): number[] (+1 overload)
//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
//we can concat 1 or more arrays.
let num1=[4,6,7,8,9];
console.log(num.concat(num1));

//10.sort():--------
//Sorts an array in place. This method mutates the array and returns a reference to the same array.
//Sorted in  alphabeticaly(assumes as a string)
let num2=[551,22,3,14,5,6,7,8,229]
num2.sort();
console.log(num2);
//if we want to place numbers as ascending order.
let compare=(a,b)=>{
    return a-b;
}
num2.sort(compare);
//Sort numbers on basis of comparision(difference) between numbers
console.log(num2);

//11.reverse():-----------
console.log(num.reverse());

//12.splice():-----------
//(method) Array<number>.splice(start: number, deleteCount: number, ...items: number[]): number[] (+1 overload)
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
let v=num2.splice(2,3,122,123,124,125);
console.log(num2,v,typeof(v));

//13.slice():------------
//(method) Array<number>.slice(start?: number | undefined, end?: number | undefined): number[]
//Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
console.log(num2.slice(3));
console.log(num2.slice(1,7));
console.log();

//"Iterate in arrays":-----------------
let num4=[23,45,67,89];
for(let a=0;a<num4.length;a++){
    console.log(num4[a]);
}
//Array.from():--------------
//used to create an array from any other object.
let name="Prabhat";
console.log(Array.from(name),"\n");

//for in:------------
for(let i in num4){
   console.log(i+" : "+num4[i]);
}

//for of:----------
for(let i of num4){
    console.log(i);
}
console.log();

//The forEach() method calls a function (a callback function) once for each array element.
/* the function takes 3 arguments:
    1.The item value
    2.The item index
    3.The array itself   */
    num4.forEach(Myfunction);
    function Myfunction(element){
    //here it takes only value
    console.log(element*element);
    }

    //here it takes only value
    let foreach69=(element,index,array)=>{
        console.log(element*element);
        }
    num4.forEach(foreach69);
    console.log();

/*JavaScript Array map():----
    The map() method creates a new array by performing a function on each array element.
    The map() method does not execute the function for array elements without values.
    The map() method does not change the original array. 
the function takes 3 arguments:-
    1.The item value
    2.The item index
    3.The array itself
    */
    const numbers1 = [45, 4, 9, 16, 25];
    console.log(numbers1);
    const numbers2 = numbers1.map(myFunction2);
    function myFunction2(value, index, array) {
      return value * 2;
    }
    console.log(numbers2);

    let map69=(element)=>{
        return element * 2;
    }
    const numbers3 = numbers1.map(map69);
    console.log(numbers3);
    console.log();

/*JavaScript Array filter():-----------
    The filter() method creates a new array with array elements that pass a test.
the function takes 3 arguments:-
    1.The item value
    2.The item index
    3.The array itself
    */
    const numbers = [50, 45, 9, 16, 25];
    console.log(numbers);
    const over18 = numbers.filter(myFunction3);
    function myFunction3(value, index, array) {
      return value > 18;
    }
    console.log(over18);

    let filter69=(element)=>{
        return element>19;
    }
    const over19 = numbers.filter(filter69);
    console.log(over19);
    console.log();

/*JavaScript Array reduce():----------------
    The reduce() method runs a function on each array element to produce (reduce it to) a single value.
    The reduce() method works from left-to-right in the array. See also reduceRight().
    The reduce() method does not reduce the original array.
the function takes 4 arguments:-
    1.The total (the initial value / previously returned value)
    2.The item value
    3.The item index
    4.The array itself
    */
    const numbers5= [45, 4, 9, 16, 25];
    let sum1 = numbers5.reduce(myFunction7);
    function myFunction7(total, value, index, array) {
      return total + value;
    }
    console.log(numbers5,sum1);

    let reduce69=(total, value, index, array)=>{
        return total + value;
    }
    //can give initial value of total also ie 100 here
    let sum2 =numbers5.reduce(reduce69,100);
    console.log(numbers5,sum2);
    console.log();