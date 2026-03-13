// print numbers from 1 to 10
console.log('print numbers from 1 to 10')
let i=1;
while(i<=10){
    console.log(i);
    i++;
}

// print numbers from 10 to 1
console.log('print numbers from 10 to 1')
let j=10;
while(j>=1){
    console.log(j);
    j--;
}


// print even numbers 
console.log('even numbers')
let k=2;
while(k<=20){
    console.log(k);
    k+=2;
}

// print odd numbers
console.log('odd numbers')
let l=1;
while(l<=20){
    if(l%2===1){
        console.log(l);
    }
    l++;
}

// sum of numbers
console.log('sum of numbers')
let m=1;
let sum=0;
while(m<=100){
    sum=sum+m
    m++;
}
console.log(sum);

// print multiplication table of 6
console.log('Multiplication table of 6')
let n=1;
while(n<=10){
    // console.log(6*n);
    console.log(`6*${n}=${6*n}`)
    n++;
}