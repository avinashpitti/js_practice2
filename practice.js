class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

let p1 = new Person("Avi", 21);
p1.greet(); // Hello Avi