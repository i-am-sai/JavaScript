// Example 1 : Simple Code : (Problem) Need to call 2 functions to dipslay the result
function display(result){
    console.log(`${result}`);
}

function calculator(num1, num2){
    let sum = num1 + num2;
    return sum;
}

let res = calculator(5,4);
display(res);

// Example 2 : Function inside function : Problem : cannot prevent the calculator function from diplaying the result
function calculator1(num1, num2){
    let sum = num1 + num2;
    display(sum);
}

calculator1(8,3);

// Callbacks : Using this we call the calculator function (calculator) with a callback and let the
// calculator function run the callback after the calculation is finished :

function calculator3(num1, num3, callback){
    let sum = num1 + num3;
    callback(sum);
}

calculator3(4,7,display); // Here display is a call back function that is passed inside ecalculator3 as an argument.


// Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

// Example 3 :

function doStep1(init) {
    return init + 1;
  }
  
  function doStep2(init) {
    return init + 2;
  }
  
  function doStep3(init) {
    return init + 3;
  }
  
  function doOperation() {
    let result = 0;
    result = doStep1(result);
    result = doStep2(result);
    result = doStep3(result);
    console.log(`result: ${result}`);
  }
  
  doOperation();
  

  // Using Callback
  function doStep4(init, callback){
    const result = init + 1;
    callback(result);
  }

  function doStep5(init, callback){
    const result = init + 2;
    callback(result);
  }

  function doStep6(init, callback){
    const result = init + 3;
    callback(result);
  }

  function doOperation1(){
    doStep4(0,(result1) => {
        doStep5(result1, (result2) => {
            doStep6(result2, (result3) => {
                console.log(`result: ${result3}`);
            });
        });
    });
  }

  doOperation1();


  const intervalID = setInterval(myFunction, 1000);

  function myFunction(){
    let d = new Date();
    console.log(`${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`);
  }

  setTimeout(() => {
    clearInterval(intervalID); // acts as a unique identifier for the timer managed internally by the JavaScript runtime.
    console.log("Interval stopped after 10 sec");
  }, 10000);