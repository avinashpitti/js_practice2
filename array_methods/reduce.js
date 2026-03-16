// reduce method :
// This method reduces an array into a single value

let numbers=[1,2,3,4,5]

let sum=numbers.reduce((total,num)=>total+num,0);
console.log(`The sum of first 5 natural numbers is ${sum}`);

let prod=numbers.reduce((total,num)=>total*num,1);
console.log(`The product of first 5 natural numbers is ${prod}`);

// finding maximum number

let numbs=[3,99,23,89,158,4,72]

let maxi=numbs.reduce((largest,num)=>num>largest?num:largest);
console.log(maxi);
// here no initial value,so reduce() considers first element of the array as 
// as the starting accumulator and begins from the second element
let mini=numbs.reduce((smallest,num)=>num<smallest?num:smallest);
console.log(mini);


// finding to tal price of products
let cart = [
 {product:"Laptop", price:50000},
 {product:"Mouse", price:500},
 {product:"Keyboard", price:2000}
];

let total = cart.reduce((sum, item) => sum + item.price, 0);

console.log(`The total value of products : ${total}`);

// find longest word
let words=["cat","elephant","dog"]
let longest=words.reduce((longest,word)=>word.length>longest.length?word:longest);
console.log(longest);