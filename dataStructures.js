// DS : Indexed collections, Key collections and Structured data

// 1. Indexed collections

// Array : dynamic size, mixed data type and built-in methods : push(), map(), filter()

let arr = [1,2,3,4,5,6];
console.log(arr.push(7));
console.log(arr);
arr.pop();
arr.shift();
console.log(arr);

// Typed Arrays : WebGL for graphics programming and handling binary data links
let typedArr = Uint8Array[4];

// 2. Keyed collections
// Map : key : value pairs, key can be object, arrays, primitive types.

let map = new Map();
map.set('name','Sai');
map.set(1,'number');
map.set({key:'value'}, 'object');
console.log(map.get('name'));
console.log(map.size);

// Sets  : is a collection of unique values, no duplicate values are allowed, maintain iteration order, Values can be of any type.

let set = new Set();
set.add(1);
set.add(2);
set.add('Sai');
set.add(1);
console.log("Set size is " + set.size);
console.log(set.has(2));

// 3. Structured Data : JSON : JavaScript object notation : a lightweight data interchange format based on java object syntax.
// Commonly used for API communication and also data has to be stored in certain format and text is always one of the legal formats.

// Data stored in key-value pairs and keys are string and values can be strings, num, arrays, obj, bool or null.
let jsonString = `{"name" : "Sai", "age": 22}`;   // nothing but text
let obj = JSON.parse(jsonString);
console.log(obj.name + " " + obj.age); 

let backtoJson = JSON.stringify(obj);
console.log(backtoJson);



const todos =
    [
        {
            id: 1,
            text: 'Take out trash',
            isCompleted: true
        },
        {
            id: 2,
            text: 'Meeting with boss',
            isCompleted: true
        },
        {
            id: 3,
            text: 'Dentist appt',
            isCompleted: false
        },
    ]

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

for (let todo of todos) {
    console.log(todo.id);
}