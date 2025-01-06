//Event handlers are functions in JavaScript that respond to events triggered by users or the browser.
//  Events can include actions such as clicking a button, moving the mouse, pressing a key, submitting a form, or loading a page.

// An event handler is "attached" to an HTML element to execute specific code when an event occurs on that element.

//Event      :    	Description	                      : Handler Property
// click     : 	When the element is clicked           : onclick
// mouseover :	When the mouse hovers over an element : onmouseover
// mouseout  :	When the mouse leaves an element	  : onmouseout
// keydown	 :  When a key is pressed	              : onkeydown
// keyup	 :  When a key is released	              : onkeyup
// submit	 : When a form is submitted	              : onsubmit
// change	 : When the value of an input/select changes :	onchange
// focus	 : When an element gets focus	          : onfocus
// blur	     : When an element loses focus            :	onblur
// load	     : When the page or resource is fully loaded : 	onload

const button2 = document.getElementById('myButton2');
button2.addEventListener('click', function () {
    alert('Button was clicked!');
});

const button3 = document.getElementById('myButton3');

button3.onclick = function() {
    alert('Button was clicked');
    console.log("Button 3 was clicked")
}

const hoverDiv = document.getElementById("hoverDiv");
    hoverDiv.addEventListener("mouseover", () => {
        hoverDiv.style.backgroundColor = "lightgreen"; // Change background color on hover
        hoverDiv.textContent = "You Hovered Over Me!";
        console.log("Hovered");
    });

    hoverDiv.addEventListener("mouseout", () => {
        hoverDiv.style.backgroundColor = "lightblue"; // Revert background color on mouse out
        hoverDiv.textContent = "Hover Over Me!";
    });

