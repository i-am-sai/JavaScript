function myDisplayer(some) {
console.log(some);
}
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 2;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );

  setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  console.log(value);
}

let myPromise1 = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve(); }, 3000);
  });
  
  myPromise1.then(function(value) {
    console.log(value);
  },function(error){
    console.log(error);
  }
);

// A Promise in JavaScript represents a value that may be available now, in the future, or never. 
// Promises are used to handle asynchronous operations such as API calls, file reading, or database queries.

//States of a Promise
//Pending: The initial state, neither fulfilled nor rejected.
//Fulfilled: The operation completed successfully, and the promise has a resolved value.
//Rejected: The operation failed, and the promise has a reason for failure.

//Async/Await
//The async and await keywords simplify working with Promises by making asynchronous code look synchronous.

//How It Works
//An async function always returns a Promise.
//The await keyword pauses the execution of the function until the Promise is resolved.

const fetchData = async () => {
    try {
        const response = await new Promise((resolve) =>
        setTimeout(() => resolve("Data Fetched!"),2000)
    );
    throw new Error("Something went wrong after fetching data!");
    console.log(response); // Logs "Data fetched" after 2sec
    } catch(error) {
        console.error("An error occurred", error);
    }
};

fetchData();