const Element = document.createElement('p');

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        Element.innerHTML = "Geolocation is not supported by this browser."; 
    }
}

function showPosition(position) {
    Element.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

function myFunction() {
    return  window.history.back();
  }

const button = document.createElement('button');
button.innerHTML = "Get Location";  
button.onclick = getLocation; // Assign the function
// getLocation() : This is incorrect because calling getLocation() with parentheses immediately invokes the function 
// instead of assigning it to the onclick property.
const button1 = document.createElement('button');
button1.innerHTML = "Browser History";
button1.onclick = myFunction;

document.body.appendChild(button);
document.body.appendChild(Element);
document.body.appendChild(button1);

