class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog barks");
    }
}

let d = new Dog();
d.speak(); // inherited
d.bark();