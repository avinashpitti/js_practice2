// A function declaration : defines a named function using the 
// function keyword. It creates a reusable block of code that can be
// executed whenever needed

function greet(fullname){
    console.log("Hello ",fullname);
}

greet('avinash');

// here function is a keyword, greet is a function name, ()inside the
//()parantheses we write parameters,here fullname, {inside this we 
// write block of code}, greet() is calling a function, avinash is an
// argument


// function with return value
function add(a,b){
    return a+b;
}

let result1=add(5,3);
console.log(result1);

// multiple calls : function can be reused multiple times

function square(num){
    return num*num;
}

console.log(square(5));
console.log(square(23));
console.log(square(39));
