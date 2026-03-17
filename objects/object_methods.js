// object methods
// javascript provides built in methods to work with object data easily
// The important ones are object.keys(),object.values(),object.entries()

let user={
    name:'Avinash',
    age:21,
    city:'Bangalore'
};
// object.keys
let keys=Object.keys(user);
console.log(keys);


// object.values
let values=Object.values(user);
console.log(values);

//object.entries
let entries=Object.entries(user);
console.log(entries);

