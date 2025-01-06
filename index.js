// Variables : var, let and const
console.log(a);
var a =9;
console.log(a);

const b = 7;
console.log(b);

var global = "Global";
function showGlobal() {
    console.log(global);
}
showGlobal();
console.log(global);

_var =9;
$e = 7;
console.log($e);

let v = Infinity;
console.log(v);

// Data Types : Symbol
let sym = Symbol('description');
let obj = {[sym]: 'value'};
console.log(obj[sym]);

// Object
let person = {
    name: "Sai",
    age: 22,
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};
person.greet();

// Non Primitive DT

let arr = [1,2,3,4,5];
console.log(arr);
console.log(arr[1]);

let now = new Date();
console.log(now.toISOString());

let sum = function(a,b){
        return a+b;
    };
console.log(sum(2,3));

console.log(typeof "dfs");

var n =9;
console.log(typeof n);
n = "Buddy";
console.log(typeof n);

// Type Conversion : Explicit
console.log(parseInt("1245abd"));
console.log(parseFloat("456.5jbn"));
num = 45;
console.log(typeof(String(num)));

let arrr =[10, "Sai", {key: "value"}, 70];
console.log(arrr.shift());

arrr.forEach(x => console.log(x));

// Comma operator
let x = (1,2,3);
console.log(x);

// Array
let array = [1,2,3,4,5];
console.log(array);
//Spread Operator
console.log(...array);

// String Interpolation
let name = "Sai";
let age = 22;
console.log(`My name is ${name} and I am ${age} year old`); 

function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

// Examples:
greet();              // Output: Hello, Guest!
greet("Sai Swaroop"); // Output: Hello, Sai Swaroop!


const interval = setInterval(() => console.log("Repeating..."), 1000);
setTimeout(() => clearInterval(interval), 5000); // Stops after 5 seconds
setTimeout(() => console.log("Hello after 2 seconds"), 2000);


function outer() {
    let outerVar = "Outer";
    function inner() {
        console.log(outerVar); // Output: Outer
    }
    inner();
}
outer();

"use strict";
m=60;
 console.log(m);
 console.log(typeof m);
delete m;

function myFunction() {
    return this;
  }