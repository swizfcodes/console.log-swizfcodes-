//arrays
// An array is just like a shelf for storing things.

const myArray = [];

//add elements to an array

myArray[0] = "swizfcodes";
myArray[1] = 2002;
myArray[2] = false;

myArray.push('school');

const newLength = myArray.unshift('school2');
console.log(newLength);

console.log(myArray);

const lastItem = myArray.pop();

console.log(lastItem);

//refer to an array
console.log(myArray);

// length property
console.log(myArray.length); 

// last element in an array
console.log(myArray[myArray.length - 1]);
console.log(myArray[1]);


//Arrays
const myArrays = ['a', 'b', 'c', 'd', 'e'];
console.log(myArrays);

myArrays.push('f');

 // Returns the number of elements
myArrays.length;

// Sorts the array
myArrays.sort(); 

const newArrays = myArrays.slice(2, 4);
console.log(newArrays);

// Remove from an array
myArrays.splice();

// loops

 let i = 1;
 while(i <= 5){
    console.log(i);
    i = i + 1; 
 }

 for(i = 1; i <= 5; i++){
    console.log(i);
 }

 const todoList = [
    'wash clothes',
    'play football',
    'dance'
 ];

 for(let i = 0; i <= todoList.length - 1; i++){
    const value = todoList[i];
    console.log(value);
 }

 const num = [1, 1, 2];
 let total = 0;

 for(let i = 0; i < num.length; i++){
    const n = num[i];
    total += n
 }
 console.log(total);

 function doubleArray(num){
      const numDoubled = [];

   for(let i = 0; i < num.length; i++){
      const n = num[i];
      numDoubled.push(n*2);
   }
   console.log(numDoubled);
 }
 doubleArray([1, 1, 2]);
 doubleArray([2, 2, 5]);
