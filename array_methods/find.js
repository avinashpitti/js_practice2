/* find() method
    find returns the first element in an array that satisfies a condition
    It check elements one by one
    It returns the first matching element
    If no match is found -- returns undefined
    */

// find first number greater than 10
let numbers=[3,9,45,12,23,38];
let result=numbers.find(num=>num>10);
// let result=numbers.find(num=>num>90); undefined
console.log(result);

// find even number
let even=numbers.find(num=>num%2===0);
console.log(even);

// using objects
let users=[
    {id:1,name:'Avinash'},
    {id:2,name:'Rahul'},
    {id:3,name:'Modi'}
];

let user=users.find(u=>u.id==2);
console.log(user);

// find word by length
let words = ["cat","elephant","dog"];

let longWord = words.find(word => word.length > 3);

console.log(longWord);

// find vs filter
// find : first matching element,single value
// filter: all matching elements,array
