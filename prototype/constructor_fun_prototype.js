function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function() {
    console.log("Hi " + this.name);
};

let p1 = new Person("Avi");
p1.sayHi(); // Hi Avi