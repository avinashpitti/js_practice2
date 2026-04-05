let person={
    name:'Avinash',
    age:21,
    address:{
        city:'Bengaluru',
        pin:500061
    }
}

let {name,...rest}=person;
console.log(name)
console.log(rest)