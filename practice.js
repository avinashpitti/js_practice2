let source={a:1};
let target={b:2,c:3};

Object.assign(source,target);
console.log(target);

let person={name:'Alice',age:21};
Object.freeze(person);

console.log(person)
// person.age=22;
// console.log(age);

// person.city='chennai';
// console.log(city);