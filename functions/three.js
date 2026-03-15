// note: return stops the function immediately

// you can't reuse the result
function multiply(a,b){
    console.log(a*b);
}

// you cn reuse the result
function multiply(a,b){
    return a*b;
}

let result = multiply(4,5);
console.log(result);




// function to add 2 numbers
console.log('sum of 5 and 6 is');

function add(a,b){
    return a+b;
}
console.log(add(5,6));

// function to check odd or even
console.log('check odd or even');

function odd_even(num){
    if(num%2===0){
        return 'even';
    }else{
        return 'odd';
    }
}

console.log(odd_even(23));
console.log(odd_even(90));

// check positive or negative
console.log('checking positive or negative');

function positive_negative(numb){
    if(numb<0){
        return 'negative';
    }else if(numb >0){
        return 'positive';
    }else{
        return 'zero';
    }
}

console.log(positive_negative(32));
console.log(positive_negative(-12));
console.log(positive_negative(0));


//function to find the largest of 2 numbers

console.log('finding the largest of 2 numbers');

function largest(a,b){
    if(a>b){
        return `${a}(a) is the largest`;
    }else if(b>a){
        return `${b}(b) is the largest`;
    }else{
        return `Both ${a}(a) and ${b}(b) are equal`;
    }
}

console.log(largest(34,67));
console.log(largest(34,21));
console.log(largest(6,6));

// function to print a multiplication table 7
console.log('function to print a multiplication table of 7');

function table(num){
    for(let i=1;i<=10;i++){
        
        console.log(`${num}*${i}=${num*i}`);
        
    }
}
table(7);

// function to print the multiplication table of 8 with return statement
console.log('Multiplication table of 8 with return statement');
function mult(numb){
    let output=' ';
    for(let i=1;i<=10;i++){
        output+=`${numb}*${i}=${numb*i}\n` //n is a line break
    }
    return output;
}
console.log(mult(8));


// function to calculate sum of numbers from 1 to n
console.log('sum of n natural numbers');
function total(num){
    let sum=0;
    for(let i=1;i<=5;i++){
        sum+=i;
    }
    return sum;
}
console.log(total(5));

// alternate method
console.log('alternate method');

function math_way(n){
    return (n*(n+1))/2;
}
console.log(math_way(5));
