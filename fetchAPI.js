fetch("https://www.linkedin.com/in/i-am-sai/")
   .then(response => {
    if(!response.ok){
        throw new Error("Netwprk response was not OK" + response.statusText);
    }
    return response.json();
   })
   .then(data => console.log("Response:", data))
   .catch(error => console.error("Error:", error));

let file = "ex.txt";   
const el = document.createElement('p');
fetch(file)
.then(x => x.text())
.then(y => el.innerHTML = y);
console.log(el);
document.body.appendChild(el);