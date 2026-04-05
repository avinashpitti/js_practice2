let a=[1,2,3]
let b=[4,5,6]

let c=[...a,...b]

console.log(c)


let original=[10,20,30]
let copy=[...original]
// let copy=original;
copy.push(40);

console.log(copy);
console.log(original);


let student={
    name:'Avinash',
    age:21
}

let updatedStudent={
    ...student,
    city:'bengaluru'
}

console.log(student);
console.log(updatedStudent);