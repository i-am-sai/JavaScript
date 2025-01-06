// JS is a lightweight, interpreted, JIT compiled scripting language primarly used for adding interaction behaviour to websites.

// Features : Lightweight, Scripting : Interpretation over compilation, Integration with environment, Automation, Dynamic languag.
// History : Brenden Eich : 1995 ( Netscape L ) : Version ECMA-262
// Current Version : ES6 or ECMAScript6
// Run : JS runs in the browser using JS enginer which parses -> compiles -> executes the code.
// The Console : Debugging, Testing, Inspecting JS behaviour in browser.
// Modern JS engine like V8 makes execution faster using JIT.

// 1. Variables : var, let and const.
var a =1;
let b = 2;
console.log(a);
console.log(b);
const c =3;  

//2.  Hoisting
console.log(d); // undefined : not Hoisted
var d;
d = 4;
// console.log(e); : Hoisted : Temporal Dead Zone
let e;

// 3. var decleration : Is case sensitive
_b = 9;
$e = 3;
console.log($e);
// 1s = 6;     : error
// *t = 2;
// -r = 5;

// 4. Variable Scope : Global, Function and Block scope.
var g = "I global";
function show(){
    console.log(g); // global access
}
show();
console.log(g);

function ex(){
    let fn = "I function"; // within Function access
    console.log(fn);
}
ex();
// console.log(fn);     : reference error

const b1 = "I outise block scope";
function blc(){
    const b2 = "I block scope";
    console.log(b2);
    console.log(b1);
}
blc();
// console.log(b2); : refernce : Const and let are only available iniside curly braces :  Block scope 

// Shadowing
let name ="OG";
function shadow(){
    name = "BG";
    console.log(name);  // local
}
console.log(name); // output : OG
shadow();  
console.log(name); // output : BG (Here the variable is shadowed)

