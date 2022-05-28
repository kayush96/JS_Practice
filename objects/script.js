//Make an empty object.
const ayush = {};
//Make a property for your object that can be accessed with a dot notation. 
//Get the value of this property.
const Person = {
    fname: 'Ayush',
    "full_name": "Ayush Kumar Verma",
    printName : function() {
        console.log(Person.fname);
    },
    addAge : function(age) {
        console.log(age + 5);
    }

}
console.log(Person.fname);
//Make a property for your object that can only be accessed with the bracket notation. 
//Get the value of this property.
console.log(Person["full_name"]);
//Set the value of a property with the dot notation.
Person.last_name = 'Kumar';
console.log(Person.last_name);
//Set the value of a property with the square bracket notation.
Person["age"] = 25;
console.log(Person["age"]);
//Make a method. Call this method.
Person.printName();
//Make a method that takes in an argument. Call this method
Person.addAge(25);