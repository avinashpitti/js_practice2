// odd even
console.log('finding odd even');

function odd_even(num){
    if(num%2===0){
        console.log('even');
    }else{
        console.log('odd');
    }
}

odd_even(12) // even
odd_even(15) // odd

// finding multipe of 5

console.log('Multiple of 5');

function multiple(number){
    if(number%5===0){
        return 'Mutliple of 5';
    }else{
        return 'Not a multiple of 5';
    }
}

console.log(multiple(12));
console.log(multiple(25));


// multiplication table function
console.log('table of 5')
function table(numb){
    for(let i=1;i<=10;i++){
        console.log(`5*${i}=${5*i}`);
    }
}

table(5)


// function to subtract 2 numbers
function sub(a,b){
    console.log(a-b);
}

sub(5,7)
sub(8,2)


// function to print numbers from 1 to n
function total(num){
    sum=0;
    for (let i=1;i<=10;i++){
        sum+=i;
    }
    return sum;
}

console.log(total(10));




