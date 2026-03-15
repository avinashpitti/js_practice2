// Arrow function without parameters
let greets = () => {
    console.log("Hello Avinash");
};
greets();

// Arrow function with parameters
let add=(a,b)=>{return a+b}
console.log(add(3,4));

// Shorter arrow function
// If the function has only one expression we can remove {} and return
let mul=(x,y)=>x*y;
console.log(mul(4,11));


// function declaration
function greet(){
    return 'hello ramesh'
}
console.log(greet());


// function expression
let greeting=function(){
    return 'hello hyderabis, how are you doing?';
}
console.log(greeting());


// practice problems
console.log('practice problems')

// divide two numbers

let divide=(p,q)=>p/q;
console.log(divide(45,8));
console.log(divide(45,9));

