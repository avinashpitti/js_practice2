let numbers=[1,2,3,4,5]
//for of
for (let number of numbers){
    console.log(number);
}

//normal for loop
for (let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

let fruits=['avocado','blueberry','cherry','dragon']
//for of
for (let fruit of fruits){
    console.log(fruit);
}

//normal for loop
for (let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}

//print numbers
let nums=[5,10,15,20]
for (let i=0;i<nums.length;i++){
    console.log(nums[i])
}

for (let num of nums){
    console.log(num);
}

// print square of numbers [2,4,6,8]
console.log('square of numbers')
let squar=[2,4,6,8]
for (let sq of squar){
    console.log(sq*sq);
}

for (let i=0;i<squar.length;i++){
    console.log(squar[i]*squar[i]);
}

let employees=["rahul","sonia","anil"]
console.log('employees list')

for (let emp of employees){
    console.log(emp)
}

for (let i=0;i<employees.length;i++){
    console.log(employees[i]);
}

for (let emp of employees){
    console.log(emp.toUpperCase())
}

for (let i=0;i<employees.length;i++){
    console.log(employees[i].toUpperCase())
}

let workers=['amit','modi','priyanka']
console.log('workers list')
for (let worker of workers){
    console.log(worker.toUpperCase())
}

for (i=0;i<workers.length;i++){
    console.log(workers[i])
    console.log(workers[i].toUpperCase())
}
