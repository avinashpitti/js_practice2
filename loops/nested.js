for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        console.log(i,j);
        // Inner loop runs completely for each outer loop iteration
        // Outer loop control rows, inner loop control columns
    }
}

//star pattern
console.log('star pattern')
for (let i=1;i<=4;i++){
    let stars='';
    for (let j=1;j<=i;j++){
        stars += '*';
    }
    console.log(stars);
}


// Number pattern
console.log('Number pattern')
for (let i=1;i<=4;i++){
    let number='';
    for (let j=1;j<=i;j++){
        number+=j;
    }
    console.log(number)
}

//square pattern
console.log('square pattern')
for (let i=1;i<=4;i++){
    let stars='';
    for (let j=1;j<=4;j++){
        stars+='*'
    }
    console.log(stars)
}

//square pattern 1 to 5
console.log('square pattern 1 to 5 stars by increasing order')

for (let i=1;i<=5;i++){
    let star=''
    for(let j=1;j<=i;j++){
        star+='*'
    }
    console.log(star);
}

//square pattern 5 to 1 in reverse order
console.log('square pattern 5 to 1 stars by decreasing order')

for (let i=5;i>=1;i--){
    console.log('*'.repeat(i));
}

// Number pattern

console.log('number pattern')
for (let i=1;i<=4;i++){
    console.log(String(i).repeat(i));
}

// multiplication grid
console.log('multiplication grid')
for (let i=1;i<=3;i++){
    let row=''
    for( let j=1;j<=3;j++){
        row+=(i*j)+' ';
    }
    console.log(row.trim());
}