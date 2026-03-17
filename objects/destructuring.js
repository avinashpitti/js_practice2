//Destructuring : means extracting values from an object and storing 
// them into variables
// Instead of accessing properties again and again we can write it
// shorter using using destructuring

let user = {
  name: "Avinash",
  age: 22,
  city: "Bangalore"
};

let name = user.name;
let age = user.age;
let city = user.city;
console.log(name);
console.log(age);
console.log(city);


let worker={
    fname:'Ramesh',
    ages:23,
    citi:'Hyderabad'
};

let {fname,ages,citi}=worker;
console.log(fname);
console.log(ages);
console.log(citi);

// extract only one property
console.log('extract one property,you dont need to extract everything');
let employee={
  ename:'srinivas',
  age:30,
  city:'vizag'
};

let {ename}=employee;
console.log(ename);

// Rename variables
console.log('sometimes we want a different variable name');

let {city:favorite_city}=employee;
console.log(favorite_city);


// default values
console.log('if a property doesnot exist we can give a default value');
let tech_emp={
  tech_name:'Prakash',
  tech_age:31,
  tech_city:'coimbatore'
};

let {tech_name,tech_exp=6}=tech_emp;
console.log(tech_name,tech_exp);