/*forEach() method
forEach loops through each element of an array and executes a function
for every element
Important points:
It iterates through the array
It doesn't return a new array
It is used for performing actions like printing,updating values etc
*/

// print all numbers
let numbers=[1,2,3,4,5]
numbers.forEach(num=>{
    console.log(num);
}); // It's just a cleaner version of normal for loop

// traditional for loop
for (let i=1;i<=5;i++){
    console.log(i);
}

// accessing index
let fruits = ["apple","banana","mango"];

fruits.forEach((fruit,index) => {
    console.log(index, fruit);
});

// working with objects
let fruitss = ["apple","banana","mango"];

fruitss.forEach((fruit,index) => {
    console.log(index, fruit);
});