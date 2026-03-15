/* callback function : A callback function is a function passed as an
    argument to another function, and it is executed later.
 */

function greet(name, callback){
    console.log("Hello " + name);
    callback();
}

function sayBye(){
    console.log("Goodbye!");
}

greet("Avinash", sayBye);


// another example
function calculate(a, b, operation){
    return operation(a, b);
}

function add(x, y){
    return x + y;
}

console.log(calculate(5, 3, add));

// callback using anonymous function
function greet(name, callback){
    console.log("Hello " + name);
    callback();
}

greet("Avinash", function(){
    console.log("Welcome!");
});

//callback with arrow function
function greet(name, callback){
    console.log("Hello " + name);
    callback();
}

greet("Avinash", () => console.log("Welcome!"));

//callbacks are used heavily in array methods

let numbers=[1,2,3,4]

let doubled=numbers.map(function(num){
    return num*2;
});
console.log(doubled);

// arrow function version

let nums=[1,2,3,4,5]
let tripled=nums.map(num=>num*3);
console.log(tripled);


/* callback functions are very important since it is used in
    event handling,api requests,timers,array methods,asynchronous 
*/