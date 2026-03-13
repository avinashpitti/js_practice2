// print numbers from 1 to 10 but skip 5
console.log('printing numbers from 1 to 10 except 5')
for(let i=1;i<=10;i++){
    if(i==5){
        continue;
        // It skips 5
    }
    console.log(i);
}

// print only odd numbers
console.log('printing odd numbers')
for (let j=1;j<=20;j++){
    if(j%2==0){
        continue;
    }
    console.log(j);
}

// skip multiples of 3
console.log('skip multiples of 3')
for(let k=0;k<=30;k++){
    if(k%3==0){
        continue;
    }
    console.log(k);
}

// skip 4 with while loop
console.log('skip 4 with while loop')
let l=0;
// It should start from 0 since we are incrementing before printing

// Always update the variable before continue, when using continue in while
while(l<10){
    l++;
    if(l==4){
        continue;
    }
    console.log(l);
}


// Print numbers 1 to 20 but skip multiples of 4
console.log('Print numbers 1 to 20 but skip multiples of 4')
for(let i=1;i<=20;i++){
    if(i%4==0){
        continue;
    }
    console.log(i);
}

// print numbers 1 to 20 but skip multiple of 5
// Incrementing before
console.log('printing numbers from 1 to 20 but skipping multiples of 5')
let i=0;
while(i<20){
    i++;
    if(i%5==0){
        continue;
    }
    console.log(i);
}

// Incrementing after
let p = 1; // Start at 1
console.log('printing numbers by skipping multiples of 6')
while (p <= 20) {
    if (p % 6 === 0) {
        p++;     // Increment BEFORE continuing to avoid infinite loop
        continue; 
    }
    console.log(p);
    p++;        // Standard increment for non-multiples
}


// A cleaner alternative
console.log('printing numbers except multiples of 4 ')
let q = 1;
while (q <= 15) {
    if (q % 4 !== 0) {
        console.log(q);
    }
    q++; // This always runs, regardless of the 'if' condition
}

// print numbers 1 to 15 but skip even numbers
console.log('print odd numbers')
let o=1;
while(o<=15){
    if(o%2 !==0){
        console.log(o);
    }
    o++;
}
