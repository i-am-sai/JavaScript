// Exception handling : allows you to gracefully handle errors in your codem preventin the prog from crashing unexceptedly.

// 1. throw statement: is used manually raise an exception.

function divide(a,b){
    if(b ==0){
        throw new Error("Infinity");
    }
    return a/b;
}

try{
console.log(divide(4,2));
console.log(divide(4,0));
} 
catch(error){
  console.error(error.message);
}
finally{
    console.log("Division is done");
}