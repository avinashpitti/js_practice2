let fruits=['apple','banana','cherry','dragon','elderberry','fig']

for (let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

for (let i=3;i<fruits.length;i++){
    console.log(fruits[i]);
}

for (let i=0;i<fruits.length;i++){
    console.log(fruits[i].toUpperCase());
}

let numbers=[10,20,30,40,50]

for (let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
    console.log(numbers[i]*numbers[i]);
}

for (let i=0;i<numbers.length;i++){
    console.log(`${numbers[i]} square is ${numbers[i]*numbers[i]}`)
}

for(let number of numbers){
    console.log(number)
}