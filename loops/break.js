// stop loop at 5 using for and loop
console.log('break with for loop')
for (let a=1;a<=10;a++){
    if(a==5){
        break;
    }
    console.log(a);
    
}

// stop loop at 6 using break and while
console.log('break with while loop')
let i=1;
while(i<=10){
    if(i==6){
        break;

    }
    console.log(i);
    i++;
}

// stop when find even number
console.log('stop when even number find in the array')
let numbers=[1,3,5,6,7,9,10,11,14]
for (let j=1;j<numbers.length;j++){
    if(numbers[j]%2===0){
        console.log('first even number: ',numbers[j]);
        break;
    }
}

// Print numbers 1 to 20, but stop when number becomes 12.
console.log('print numbers from 1 t0 20, break at 12')
for (let x=1;x<=20;x++){
    if(x==12){
        break;
    }
    console.log(x);
}

// print numbers 1 to 10, stop when number is divisible by 7
console.log('print numbers 1 to 10, stop when number is divisible by 7')
for (let y=1;y<=10;y++){
    if(y%7==0){
        break;
    }
    console.log(y);
}

// Find the first number divisible by 9 between 1 and 100
console.log('the first number divisible by 9 between 1 and 100')
for (let z=1;z<=100;z++){
    if(z%9==0){
        console.log(z);
        break;
        
    }
}