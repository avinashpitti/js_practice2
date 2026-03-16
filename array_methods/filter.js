/* filter method :
    filter creates a new array containing only the elements that satisfy
    a condition.
    Important points :
    It checks each element
    It keeps the element that return true
    It removes elements that return false
    It returns a new array
 */

// filter even numbers
console.log('filter even numbers');
let numbers=[1,2,3,4,5,6,7]
let even=numbers.filter(num=>num%2===0);
console.log(`even numbers : ${even}`);

// filter odd numbers
let odd=numbers.filter(num=>num%2===1);
console.log(`odd numbers : ${odd}`);

// numbers greater than 10
let numbs=[1,23,4,54,34,7,90]
let greater_than_ten=numbs.filter(numb=>numb>10);
console.log(`The numbers greater than 10 : ${greater_than_ten}`);

// filtering strings
let words=['pen','book','city','spade','school','van','Science']

let starts_with_s=words.filter(s=>s.toLowerCase().startsWith('s'));
console.log(starts_with_s);

let small_words=words.filter(small=>small.length<4);
console.log(small_words);

// filtering objects
let users=[
    {name:'Avinash',age:21},
    {name:'gowtham',age:16},
    {name:'priya',age:14},
    {name:'Anil',age:28},
    {name:'srinivas',age:19}
]

let adults=users.filter(user => user.age >=18);
// here we filter users who are greater than or equal to 18
console.log(adults);