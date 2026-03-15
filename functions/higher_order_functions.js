/* Higher order function :
    A higher order function is a function that takes another function
    as argument 
*/

// function as argument
function greet(name, callback){
    console.log("Hello " + name);
    callback();
}

function sayBye(){
    console.log("Goodbye!");
}

greet("Avinash", sayBye);


// function returning another function
function multiplier(x){
    return function(y){
        return x * y;
    }
}

let double = multiplier(2);

console.log(double(5));

// higher order function with arrays
let numbers = [1,2,3,4];

let doubled = numbers.map(num => num * 2);

console.log(doubled);