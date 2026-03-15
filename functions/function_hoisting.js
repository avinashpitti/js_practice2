// function_hoisting : one special feature of function declaration
// is function hoisting. This means you can call the function before
// it is written in the code. Because javascript moves function
// declarations to the top during execution.

greeting();

function greeting(){
    console.log('hello bengaluru');
}
