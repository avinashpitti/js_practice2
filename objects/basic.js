// object: An object is a collection of key:value pairs
let user={
    name:'Avinash',
    age:21,
    city:'Bengaluru'
};

// creating objects
//method 1
let car={
    brand:'Toyota',
    model:'Carmy',
    year:2022
};

//method 2
let bike=new Object();
bike.brand='Honda';
bike.model='shine';
bike.year=2012;


// Accessing object properties

let employee={
    name:'mahesh',
    age:22,
    loc:'Hyderabad'
};
// using dot notation
console.log(employee.loc);
//using bracket
console.log(employee['age']);

// updating object values
employee.age=51;
console.log(employee);

// Adding new properties
employee.state='Telangana';
console.log(employee);

// deleting property
delete employee.age;
console.log(employee);

//objects with functions(methods)
//objects can contain functions called methods
let user_info={
    name:'Avinash',
    greet:function(){
        console.log('Hello');
    }
};

user_info.greet();

// using this keyword
// this refers to current Object

let users_info={
    name:'Avinash',
    greet:function(){
        console.log('Hello',this.name);
    }
};

users_info.greet();

//looping through object
let worker={
    name:'Ramesh',
    age:22,
    city:'dehradun'
};

for (let key in worker){
    console.log(key,worker[key]);
}


// objects inside array
let traders=[
    {name:'sibal',age:56,loc:'delhi'},
    {name:'nandan',age:48,loc:'pune'},
    {name:'sundar',age:51,loc:'california'}
];

console.log(traders[1].name );

