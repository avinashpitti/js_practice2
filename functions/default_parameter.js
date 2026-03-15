/* Default parameter : A default parameter allows you to give a parameter
    a default value if no argument is passed
 */

// without default parameter

function greet(name){
    console.log('hello '+name);
}
greet() // hello undefined


// with default parameter

function greets(name='user'){
    console.log('hello '+name);
}
greets() // hello user


// passing value: if argument is provided, default is ignored

function greeting(name='guest'){
    console.log('hey '+name);
}
greeting('avinash');