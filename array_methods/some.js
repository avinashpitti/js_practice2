/*some() method :
    some tests whether atleast one element in the array passes a condtion
    -- returns true if atleast one element matches
    -- returns false if no elements match
    -- stops checking once it finds the first true condition
 */

// check for even number
let numbers=[1,89,37,44,67,78,180]
let even=numbers.some(num=>num%2===0);
console.log(even);

// check if num>100
let greater=numbers.some(num=>num>100);
console.log(greater);

// no match case-false
let specific=numbers.some(num=>num===99);
console.log(specific);

// using objects
let users = [
 {name:"Avinash", age:22},
 {name:"Rahul", age:17},
 {name:"Aman", age:25}
];

let hasMinor = users.some(user => user.age < 18);

console.log(hasMinor);