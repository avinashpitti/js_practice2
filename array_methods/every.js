/*every() method :
    It checks if all elements in an array satisfy the condition
    -- Returns true if every element passes the condition
    -- Returns false if even one element fails
    -- stops checking once it finds a false condition
*/

// check if all numbers are positive
let numbers=[2,3,4,6,8];
let positive=numbers.every(num=>num>0);
console.log(positive);

// check if all are even
let even=numbers.every(num=>num%2===0);
console.log(even);

// using objects
let users = [
 {name:"A", age:22},
 {name:"B", age:25},
 {name:"C", age:30}
];

let adults = users.every(user => user.age >= 18);

console.log(adults);