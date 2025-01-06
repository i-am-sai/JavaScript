// this keyword : refers to an object (different objects depending on the usecase)
// 1. object method = this refers to the object
// 2. Alone = this refers to the global object 
// 3. Function = this refers to the global object
// 4. Function(Strict mode) = this is undefined
// 5. event = this refers to the element that recieved the event
// methods like call(), apply() and bind() can refer this to any object

// Note : this is not a variable. It is a keyword. You cannot change the value of this

//1. : this in a object method : this refers to an object (person)

const Person = {
    firstName: "Sai",
    lastName: "Swaroop",
    id:        7707,
    fullName : function() { 
    return this.firstName + " " + this.lastName;
    }  // this = Person
}
Person.fullName;
console.log(Person.fullName());

// 2. this Alone
let c = this;  // global obj (window in browser)
console.log(c); // output : {} refers to window object 

//3. strict mode : it is undefined : op : typeError

//4. this in a Functin (Default) and in strict mode it's undefined
function myFunction(){
    return this;
}
myFunction(); // window object

//5. Event Handlers : It refers to the html element that recieved the event
// <button onClick="this.style.display='none">
// click Me
// </button>

// Object Method binding : this refers to the person
const person1 = {
    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    myFunction : function() {
      return this;
    }
  };

console.log(person1.myFunction());

// Explicit Function Binding : call() and apply() are predefined JS methods
// They both can be used to call an object method with another object as arguments.

// a. call() method : it can be used to invoke a method with an owner obj as an argument

const pers = {
    fullName: function(city, country){
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const pers1 = {
  firstName: "Vinit",
  lastName: "Hanabar"
}

console.log(pers.fullName.call(pers1, "Belgaum", "India"));

// apply method
const person2 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person3 = {
    firstName: "Mary",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe":
  console.log(person2.fullName.apply(person3));


  // Function Borrowing : with the bind method, an object can borrow a method from another object

  const per = {
    firstName: "Sai",
    lastName: "Swaroop",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
  }

  const mem = {
    firstName: "Vinit",
    lastName: "Hanabar",
  }

  console.log(per.fullName.bind(mem));


  // This Precedence : bind , apply and call, object method and global scope.