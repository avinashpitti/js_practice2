let person={
    name:'Avinash',
    age:21,
    address:{
        city:'Bengaluru',
        pin:500061
    }
}

let {address:{city,pin}}=person
console.log(city);
console.log(pin);