let nums=[10,20,30]
function sum(a,b,c){
    return a+b+c;
}

console.log(sum(...nums))

let arr=[1,2,3]

let newArr=[0,...arr,4,5]
console.log(newArr)