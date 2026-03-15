console.log('Hello');
console.log('Hello');
console.log('Hello');
console.log('Hello');

// Basic function
console.log('basic function');

function greet(){
    console.log('Hi,avinash');
}
greet()
greet()
greet()
greet()
greet()

// function with parameters
console.log('function with parameters allow input values')

function greets(name){
    console.log('Hello',name);
}
greets('prakash')
greets('srinivas')
greets('chandu')
greets('rakesh')

// function with return value
// sometimes we want the function to send a result back
function add(a,b){
    return a+b;
}

// storing in a variable
let result=add(2,3)
console.log(result);
// printing directly
console.log(add(3,6));