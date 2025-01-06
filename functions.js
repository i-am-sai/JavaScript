// Functions : foundational building blocks in JS.

function add(a,b){
    return a+b;
}
console.log(add(4,4));

// 2. Function parameter

function greet(name = "Guest"){
    console.log(`Hello, ${name}!`);
}
greet();
greet("Sai");

//3. reset parameters : allow you to rep indefinte no of arguments as an array.  denoted ...

function sum(...numbers) {
    return numbers.reduce((tot, num) => tot + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15

//4. Arrow functions : ES6, one-liner, usefull for callbacks

const add1 = (a,b) => a+b;
console.log(add1(3,2));

//5. Builti-in Functions

console.log(parseInt("45"));       //parseInt
console.log(parseFloat("43.56"));  //parseFloat

//setTimeout : exectes function after a specified delay
setTimeout(() => console.log("Hello after 2 sec"), 2000);

//setInterval : executes a function repeatedly at specified interval
// const interval = setInterval(() => console.log("repeating..."),1000);  // executes every 1 sec
// setTimeout(() => clearInterval(interval),10000); // stops thhe above thing after 10 sec.

// eval : evaluates JS code in string form
eval("console.log(2+2)");

// IIFE : Immediately invoked function expression

(function(){
    console.log("IIFE executed");
})();

(function(name){
    console.log(`Hello, ${name}!`);
})("Sai Swaroop");

// Arguments object : is an aray like object available inside all non arrow functions. It containes all the arguments passed to the functions.
function sum(){
    let tot = 0;
    for(let i =0; i<arguments.length; i++){
        tot+=arguments[i];
    }return tot;
}console.log(sum(1,2,3,4,5,6));

// Lexical Scope : Function can access variable from their parent scope

function outer(){
    let outside = "out";
    function inner(){
        console.log(outside);
    }
   inner();
}
outer();

// Function Stack : Recursion

function first(){
   console.log("first");
}
function second(){
    first();
    console.log("Second");
}
function third(){
    second();
    console.log("Third");
}
third();

// Clousers : The inner fn captures var from the outer (enclosing) fn even after the outer fn has returned.
//Used in : Data Encapsulation, callbacks, evenet handlers and async operations.

// Data Privacy : Encapsulation
function counter(){
    let count = 0;
    return{
        increment(){
            count++;
            console.log("Count is " + count);
        },
        decrement(){
            count--;
            console.log("Count is  "+ count);
        }
    }
}
const myCounter = counter();  // The increment and decrement functions forms closures over the count variable.
myCounter.increment();
myCounter.increment();
myCounter.decrement();