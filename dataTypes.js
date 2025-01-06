// Primitive DT : string, number, boolean, undefined, null, BigInt, symbol.
// Non-Primitive DT : object(function ,arrays, dates etc.)

// 1. String :
var s = "Hello";
let st = "I'm";
const str = '    Sai Swaroop';
console.log(s + " " + st + " " + str);
console.log(`${s} ${st} ${str}`);     // String interpolation
// str = "Swaroop";
// console.log(str);   cannot be changed
console.log(s.concat(st));
console.log(str.toUpperCase() + " " + str.toLowerCase());
console.log(str.trim(1));   // removes blank/whitespacesfrom both side of the string.
console.log(str.includes("Swaroop"));
console.log(str.slice(2,4));
console.log(str.replace("Sai", "s"));
console.log(str.replaceAll(str,"Vinit"));
// console.log(str.split(7));

// 2. Number : both int and floating numbers : -Infinity, Infinity and NaN : Not a number
let num = -Infinity;
console.log(typeof num);

// 3. boolean ; true or false " small letters"
 let val = true;
console.log(!val);

// 4. Undefined : var that has been declared but not initialized
let varm;
console.log(varm);

// 5. null : Decalred purposefully
random = null;
console.log(random);

// BigInt : Larger number (2^53 -1) : append n at the end of the number
let big = 1284747383373837363n;
console.log(typeof big);

// Symbol : rep unique and immutable values
let sym = Symbol('disp');
let obj = {[sym] : 'value'};
console.log(obj[sym]);

// Non primitive DT 
// Object : Collect key value pair (array, function, date)

let person = {
   name : "Sai",
    age : 22,
    greet : function(){
        console.log("Hello Mr " + this.name);
    }
}
person.greet();

// Built-In objects : array, date, math, functions
// Array :
let arr = [1,2,3,4];
console.log(arr + " " + "Index : "+ arr[2]);

// Date : 
let now = new Date();
console.log(now.toISOString());

// math : 
console.log(Math.sqrt(36));

// Function :
let sum = function(a,b){
    return a+b;
}
console.log(sum(3,5));

// Arrow Function
const sum1 = (a,b) => a+b;
console.log(sum1(2,3));
