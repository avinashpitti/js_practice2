// Array: An array is a collection of multiple values stored in a single
// variable. Array index always starts from zero.

// creating arrays
//method 1 :
let fruits=['apple','banana','mango']

// method 2 :
let numbers=new Array(1,2,3,4);


// Accessing array values
console.log(fruits);
console.log(fruits[0]);

console.log(numbers);
console.log(numbers[2]);

//changing array values
fruits[0]='Jack fruit';
console.log(fruits);

// Array length
console.log(`length of the fruits : ${fruits.length}`);

// Adding and remove elements
// push add elements at the end(one or many)
//pop removes last element(only one)
//unshift add elements at the start(one or many)
//shift removes first element(only one)
fruits.push('dragon','blueberry');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift('avocado','apple');
console.log(fruits);
fruits.shift();
// fruits.shift('avocado','apple'); if you give values it doesn't care
console.log(fruits);


//looping through arrays

// using for
let nums=[10,20,30,40];
for (let i=0;i<nums.length;i++){
    console.log(nums[i]);
}

// using for of
for( let num of nums){
    console.log(num);
}

