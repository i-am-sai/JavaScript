//GET HTTP Method :
async function GetData() {
    let endpoint = 'https://jsonplaceholder.typicode.com/users';
    const request = await fetch(endpoint, {method: 'GET'});
    const response = await request.json();
    console.log(response);
}
// GetData();

// POST HTTP Method :
async function AddData() {
    let endpoint = 'https://jsonplaceholder.typicode.com/users';
    const request = await fetch(endpoint, {
        method: 'POST', 
        body: JSON.stringify(data),
    });
    const response = await request.json();
    console.log(response);
}

const data = {
    username: 'Sai Swaroop',
     age:22
    };
AddData();

const json = JSON.stringify(data);
// console.log(json);
// console.log(data);

async function getD() { 
    let endpoint = 'https://jsonplaceholder.typicode.com/users/1';
    const request = await fetch(endpoint, {method: "GET"});
    const response = await request.json();
    console.log(response);
}
getD();

async function UpdateData() {
    let endpoint = 'https://jsonplaceholder.typicode.com/users/1';
    const request = await fetch(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data1),
    });
  
    const response = await request.json();
    console.log(response);
  }
       const data1 = { email : 'annapurna@coffee.in' };
UpdateData();

    
async function getD() { 
    let endpoint = 'https://jsonplaceholder.typicode.com/users/1';
    const request = await fetch(endpoint, {method: "GET"});
    const response = await request.json();
    console.log(response.status);
}
getD();



