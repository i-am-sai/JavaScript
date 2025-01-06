// HTML DOM : JS can change all the html elements, attributes, css styles, remove and add html elements.
// Can react to all exisiting html events and create new html events in the page.

//Learnings : 1. How to change the html elements
//2. how to change css of html elements
//3. how to react to html DOM events
//4. how to add and delete html elements

// W3C DOM defines a standard for accessing documents: is a platform and language-neutral interface thata allows programs and scripts to dynamically access and updaate the content, structure and style of document.

// HTML DOM : standard object and programming interface of HTML : objects (html elements) , properties of html elements and the methods to access all the html elements and events for all the html elements.
// html dom elements : objects
// html dom properties : values that we can change
// html dom actions : methods that we can perform on elements

// 1. innerHTML = changes content (text)
// 2. getElementaryId = access the element to use.
document.getElementById("demo").innerHTML = "DOM Manipulation started";
const element = document.getElementsByTagName("p");
console(element);

// If we want to find all HTML elements that match a specified CSS selector(id, class, names, types, attributes, value of attributes) then use:
// querrySelectorAll() method.

const title = document.getElementById('title');
console.log(title.textContent); // Outputs: Welcome
