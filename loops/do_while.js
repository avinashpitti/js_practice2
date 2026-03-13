// print numbers from 1 to 5
let i=1;
do{
    console.log(i);
    i++;
}while(i<=5);


//print numbers from 10 to 1
console.log('print numbers from 10 to 1')
let j=10;
do{
    console.log(j);
    j--;
}while(j>=1);

// Demonstrating the difference
console.log('It print once eventhough the condition is false')
let k=10;
do{
    console.log(k);
    k--;
}while(k<=5);
// Even though 10<5 is false, it still executed once.
// since code runs first,condition checked later


// print numbers from 1 to 10
console.log('printing numbers from 1 to 10')
let x=1;
do{
    console.log(x);
    x++;
}while(x<=10);

// print even numbers from 2 to 20
console.log('printing even numbers from 2 to 20')
let y=2;
do{
    console.log(y);
        y+=2;
    }while(y<=20);

//print table of 4
console.log('4 table')
let z=1;
do{
    console.log(`4*${z}=${4*z}`);
    z++;
}while(z<=10);

// print numbers 20 t0 15
console.log("printing numbers from 20 to 15")

let nums=20;
do{
    console.log(nums);
    nums--;
}while(nums>=15);


// find sum of numbers 1 to 10
console.log('sum of first 10 numbers')
let sum=0;
let p=1;
do{
    sum=sum+p;
    p++;
}while(p<=10);
console.log(sum);
