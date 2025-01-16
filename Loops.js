// Loops : for, while, do-while and for...in and for...of loop.

// 1. for loop
for(let i =0; i<5; i++){
    console.log(i);
}

//2. While loop : when no of iteration is not known but condition is known
let q=0;
while(q<5){
    console.log(q);
    q++;
}

//3. Do-while loop : Without knowing condition is true it will run atleast once.
let k =0;
do{
  console.log(k);
  k++;
}while(k<5);

//4. for...in loop : loop iterates over keys(prop) of an object or the indices of an array.
// Best for iterating over objects or accessing indices in an array. Avoid for iterating directly over a array : For this use for..of loop

let person = { name : "John", age: 22, city: "Doll" };
for(let key in person){
    console.log("key : " + key+ " value: "+ person[key]);
}


//5. for...of loop : itrates over value of iterable like array, string and map. cannot used directly for objects

let colors = ["red", "green", "blue"];
for(let col of colors){
    console.log(col);     // direct values
}

for(let col in colors){
    console.log(col);  // provide indices
}

let Str = "JavaScript";
for(let char of Str){
    console.log(char);
}

// break
for(let i =0; i<5; i++){
    if(i ==4){
        break;;
    }
    console.log(i);
}

// continue
for(let i =0; i<10; i++){
    if(i %2 ==0){
        continue;
    }
    console.log(i);
}

let arr = [10,20,30,40];
for(let c in arr){
    console.log(c);
}

for(let c of arr){
    console.log(c);
}
