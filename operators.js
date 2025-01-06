// Conditional : Ternary operator :

let age = 20;
let status = (age >=18) ? "Adult": "Minor";
console.log(status);

// Optional chaining : accessing nested properties

const user = {dog :{name : "Bruno"}};
console.log(user.dog?.name);
console.log(user.cat?.name);
