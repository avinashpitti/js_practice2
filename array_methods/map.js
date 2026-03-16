/*map() method :
map() creates a new array by applying a function to every element of 
the original array.
Important points:
It loops through each element
It transforms the element
It returns a new array
The original array is not changed
Most commonly used with arrow function
 */

// doubling of numbers
console.log('doubling of numbers');
let numbers=[10,20,30,40];
let doubled=numbers.map(num=>num*2);
console.log(doubled);
console.log(numbers);

// cube of nums
let nums=[1,2,3,4,5];
let cube=nums.map(n=>n**3);
console.log(`cube of numbers : ${cube}`);

// convert strings to uppercase
let names=['Avinash','Rohit','Prakash']
let capitalize=names.map(name=>name.toUpperCase());
console.log(capitalize);

// Objects with map()
let users=[
    {name:'Avinash',age:21,loc:'Bangalore'},
    {name:'Chandu',age:30,loc:'Hyderabad'},
    {name:'Anil',age:28,loc:'chennai'}
];

let usernames=users.map(user=>user.name);
let ages=users.map(user_age=>user_age.age);
console.log(usernames);
console.log(`user_ages are : ${ages}`);

// multiply numbers by 3
let numbs=[1,2,3,4]
let tripled=numbs.map(n=>n*3);
console.log(tripled);

// convert name to uppercase
let employees=["john","alex","sam"];
let capitaliz=employees.map(emp=>emp.toUpperCase());
console.log(capitaliz);

// get ages from object
let info=[
    {name:'A',age:12},
    {name:'B',age:14}
]

let access_age=info.map(a=>a.age);
console.log(access_age);



