let person={
    name:'Avinash',
    age:21,
    city:'Bangalore',
    state:'Karnataka'
}

for (key in person){
    console.log(`${key}: ${person[key]}`)
}

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
Object.entries(person).forEach(([keys,values])=>{
    console.log(`${keys}:${values}`)
})