let greet1: Function; //Function type with a capital F

//once declared as Function, it can not be any another type
//greet = 'hello' //returns an error 

greet1 = () => {
    console.log('hello, world');
} 
//-----------------------------------------------------------------//

//this is a function,where the types of the arguments are declared
//the third argument is c which is an optional argument of union type
//when it's optional, it doesn't have to be passed, and it's value is undefined

const add = (a: number, b: number, c?: number | string) => {
          //(a: number, b: number, c: number | string = 10) //passing a default parameter
          //which then, doesn't need to be passed into the call
          //always write optional and default parameteres at the end!!
    console.log(a + b)
    console.log(c)
}

add(5, 10);
//^^^ this function is of void type (hover over it to see). It's because
//it doesn't return a value, just logs something to to console
//functions that are void, means they are deprived of any value
//the void type can also be declared, like so: 
const add1 = (a: number, b: number, c?: number | string): void => {
console.log(a + b)
console.log(c)
}

//----------------------------------------------------------------------//

//infered type by return value; 
const minus = (a: number, b: number) => {
    return a + b
}

let result = minus(10, 7); 
//the variable result, is of type number and it's type cannot be changed


//the same function can be written, and it's type can be declared
//even though it is not necessary, because it is decided by the return value
//but, it can be done for specificity
const minus1 = (a: number, b: number): number => {
    return a + b
}

//-----------------------------------------------------------------------------//
// type aliases for DRY purposes

//the regular way of writing functions, with same parameters
const logDetails = (uid: string | number, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: {name: string, uid: string | number}) => {
    console.log(`${user.name} says hello`);
}

//same functions as above, but written with type alias, wher we give the type
//a name, and then we replace it in the code in order not to repeat ourselves 

type StringOrNum = string | number;

const logDetailsAlias = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

//same is to be done with the object: 
type objWithName = {name: string, uid: StringOrNum}

const greetAlias = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}

 