var character = 'mario';
var age = 30;
var isBlackBelt = false;
//character = 20;
character = 'luigi';
//age = 'yoshi';
age = 40;
//isBlackBelt = 'yes'
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
//--------------ARRAYS-------------------//
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
//names.push(3); not allowed, because not a string
var numbers = [10, 20, 30, 40];
numbers.push(25);
//numbers.push('shaun') //error, because not a number
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ruy');
mixed.push(10);
//there are no errors, because in the original initiation, 
//it has both types. Also, any type variable can be replaced for the other
//------------------OBJECTS----------------//
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ruy';
//ninja.age = '30' can't change the type of the property, 
//once it's declared. if it's a number, it stays number
//ninja.skills = [ 'fighting', 'sneaking'] //can't do this
//you can't add new properties to the object that haven't been declared
//during the original initialization
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40 //comment age out to see the error
};
//without age, the redefining of the object gives an error, because 
//it's missing a value from the initial structure. It can only be redefinied
//if it contains everything as it's initial definition, and the same types 
//------------------------------ EXPLICIT TYPES----------------//
//basic types
var char;
var years;
var isLoggedIn;
//arrays
//this is the correct way to initialize an array in which string values
//are about to be pushed. 
var ninjas1 = [];
ninjas1.push('shaun');
console.log(ninjas1);
//union types 
//when we want an array that will have more than 1 type of values, we initialize it 
//as a union type 
var mixed1 = [];
mixed1.push('hello');
mixed1.push(20);
mixed1.push(false);
console.log(mixed1);
var uid; //a variable that can be a number or a string
//doesn't need the parenthesis for the declaration on variables, just 
//for arrays
//objects 
//to just declare that this variable is an object type
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
//to be more specific about the types of properties
//the object contains
var ninjaTwo;
ninjaTwo = {
    name: 'mario',
    age: 20,
    belt: 'black'
};
//----------------ANY TYPE----------//
var birth_years = 25; // initialized as a number
birth_years = true; // is now a boolean
birth_years = 'hello'; //is now a string
var mixed3 = []; //array in which we can push any type
mixed3.push(5);
mixed3.push('mario');
mixed3.push(false);
console.log(mixed3);
var ninja3; //object where we initialize properties
//to be of any type
ninja3 = { name: 'yoshi', age: 25 };
ninja3 = { name: 25, age: 'yoshi' };
console.log(ninja3);
