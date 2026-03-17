// Spread operator:
// It is used to expand elements of an array or object

// copy array
let arr1=[1,2,3,4]
let arr2=[...arr1]
console.log(arr2);

// add elements
let arr3=[10,20,30]
// let arr4=[arr3,40,70,100]
let arr4=[...arr3,40,70,100]
console.log(arr4);

// merge arrays
let a=[5,6]
let b=[7,8]

let merged=[...a,...b];
console.log(merged);

