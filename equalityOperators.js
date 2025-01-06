// Equality operators : Abstract, Strict and Object.is()

// Abstract operator : == : just performs type conversion (coercion) if the type of operand differ. After conversion it compares the value

console.log("5" == 5);  // "5" -> 5
console.log(true == 1);
console.log(null == undefined);  // loosely equal to each other but === it's not equal
console.log(null == 0);
console.log([1,2] == "1,2");  // obj is convt to string

// Strict opertor : === : operator that checks the value and type of operand without coercion. BEST PRACTISE
console.log(5 === 5);
console.log("5" === 5);
console.log(null === undefined); // false

let obj1 = {key: "value"};
let obj2 = {key: "value"};
let obj3 = obj1;
console.log(obj1 === obj2); // false
console.log(obj1 === obj3); // true

// Object.is() : method determines whether 2 value are the same value. It is similar to === but differs in handling, NaN, 0 and -0.

console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN));  // true
console.log( +0 === -0);           // true
console.log(Object.is(+0,-0));     // false