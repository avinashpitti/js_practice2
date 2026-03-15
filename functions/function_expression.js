// Function expression : A function expression means storing a function
// inside a variable. so instead of declaring a function directly, 
// we assign the function to a variable

let greet = function(){
    console.log("Hello Avinash");
};

greet();

/* here let greet is a variable storing the function
function - keyword to create a function
()-parameters(these are optional)
{}-function body (or) block of code
 */


// function with return value

let add=function(a,b){
    return a+b;
}

console.log(add(7,8));


// function declaration vs function expression
// function declaration support hoisting
// Function expression do not support hoisting(it gives error)
// console.log(square(7)); (it gives error)
let square= function(num){
    return num*num;
}
console.log(square(5));
console.log(square(9));

// function to calculate cube

let cube=function(num){
    return num**3;
}

console.log(cube(5));
console.log(cube(9));
