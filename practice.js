let person={
    name:'Avinash',
    age:21,
    city:'Bangalore',
    greet:function(){
        return `I am ${this.name} a ${this.age} years old student`
    }
}

console.log(person.greet())