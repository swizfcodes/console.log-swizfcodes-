//An object groups multiple values together.

const product = {
    name: 'socks',
    price: 1050
}
console.log(product);
console.log(product.name);
console.log(product.price);

product.name = 'cottonsocks';
console.log(product);

product.newProperty = true;
console.log(product);

delete product.newProperty;
console.log(product);

//why do we use object?
//1) Allow us use and group multiple vales together.
//2) Makes our code  more organized.

/*Objects are variables too. But objects can contain many values.
This code assigns many values (Fiat, 500, white) to an object named car:*/

const car = {
    type:"Fiat", model:"500", colour:"white"
};

/*JavaScript Object Literal
An object literal is a list of name:value pairs inside curly braces {}.*/

const person = {firstName:"John", lastName:"Doe",
 age:50, eyeColor:"blue"};

//This example creates an empty JavaScript object, and then adds 4 properties:

// Create an Object
const person1 = {};

// Add Properties
person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 50;
person1.eyeColor = "blue";

/*Using the new Keyword
This example create a new JavaScript object using new Object(), 
and then adds 4 properties:*/

// Create an Object
const person2 = new Object();

// Add Properties
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";


/*Accessing Object Properties
You can access object properties in two ways:
*/

person2.lastName;

const individual = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    age : 40,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  const x = individual;
  x.age = 45;

  individual.nationality = 'Nigerian';

  document.getElementById('name').innerHTML = 
  individual.fullName() + " " + "is" + " " + individual.nationality ;

  myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }

  const myArray = Object.values(myObj.myCars);
  
  document.getElementById('name').innerHTML = myArray;

/*JavaScript objects can be converted to a string with JSON method 
JSON.stringify().
JSON.stringify() is included in JavaScript 
and supported in all major browsers.*/

let myString = JSON.stringify(myObj);
document.getElementById('name').innerHTML = myString;


/*Object Constructor Functions
Sometimes we need to create many objects of the same type.
To create an object type we use an object constructor function.
It is considered good practice to name constructor functions 
with an upper-case first letter.*/

function human(first, last, age, nationality){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.nationality = nationality;
        this.fullName = function(){
        return  this.firstName + " " + this.lastName
      };
};

// create a human object

const me = new human(
  "Wizzy", "Godwin", 23, "Nigerian"
);

const myFather = new human("Izie", "Godwin", 50, "Nigerian");
const myMother = new human("Josephine", "Ohilebu", 48, "Nigerian");
const mySister = new human("Lois", "Godwin", 18, "Nigerian");

console.log(me);

document.getElementById('name').innerHTML = "I am " + me.age +
  " While my sister is " + mySister.age;

//To add a new property, you must add it to the constructor function prototype:
human.prototype.state = "Edo";
document.getElementById('name').innerHTML = "I am from " + me.state + " state";
document.getElementById('name').innerHTML = "My name is " + me.fullName();

//Add a method
myMother.changeName = function(name){
  this.lastName = name;
};

// Change name
myMother.changeName("Godwin");
document.getElementById('name').innerHTML = "My mother's name is " +
 myMother.fullName();

 // Adding a method to a constructor

 human.prototype.changeName = function(name){
    this.changeName = name;
 };

 document.getElementById('name').innerHTML = "My mother's name is " +
 myMother.fullName();

 console.log(myMother.fullName());

//JavaScript has built-in constructors for all native objects:

new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object

/*Did You Know?
Use object literals {} instead of new Object().
Use array literals [] instead of new Array().
Use pattern literals /()/ instead of new RegExp().
Use function expressions () {} instead of new Function().
*/

"";           // primitive string
0;            // primitive number
false;        // primitive boolean

{};           // object object
[];           // array object
/()/          // regexp object


  
const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];

const myObb = Object.fromEntries(fruits);
document.getElementById('name').innerHTML = myObb.apples;

console.log(myObb);

// Create an Array
const fruitss = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to select low volumes 
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by ok and low
const result = Object.groupBy(fruitss, myCallback);

// Display Results
let text ="These fruits are Ok: <br>";
for (let [x,y] of result.ok.entries()) {
  text += y.name + " " + y.quantity + "<br>";
}

text += "<br>These fruits are low: <br>";
for (let [x,y] of result.low.entries()) {
  text += y.name + " " + y.quantity + "<br>";
}

document.getElementById("name").innerHTML = text;


const humans = {
  fname :"John",
  lname :"Doe",
  age:25
}; 

let txt = "";
for (let x in humans) {
  txt += humans[x] + " ";
}

document.getElementById("name").innerHTML = txt;

// Create an Object:
const persons = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Add a Property
Object.defineProperty(persons, "year", {value:"2008"});
document.getElementById("name").innerHTML = persons.year;

// Create an Object:
const person3 = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Change a Property
Object.defineProperty(person3, "language", {value : "Esan"});
document.getElementById("name").innerHTML = person3.language;



// Create an Object
const person4 = {
  firstName: "John",
  lastName : "Doe",
  language : "EN",
  get lang(){
    return this.language;
  },
  set nat(nat){
    this.nationality = nat;
  },
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};

// Set an object property using a setter:
person4.nat = "English";

document.getElementById("name").innerHTML = person4.fullName;

// Get all Properties
Object.getOwnPropertyNames(person4);





