let age=21;

// Normal if else
if(age>=18){
    console.log('Adult');
}else{
    console.log('Child');
}

// Ternary Operator
age>=18?console.log('Adult'):console.log('child')

let marks=56

marks>=35?console.log('qualified'):console.log('Not qualified')

// storing Result in a variable
let result=marks>=35?'qualified':"Not qualified"
console.log(result)

//positive or negative
let num=0;
num>0?console.log('positive'):num<0?console.log('negative'):console.log('zero');


// pass or fail
score=23
score>=35?console.log('pass'):console.log('fail')

// find the largest between two numbers using ternary
let num1=33;
let num2=33;
num1>num2?console.log('num1 is the greates'):num2>num1?console.log('num2 is the greatest'):console.log('Both are equal');
