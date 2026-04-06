let person = {
    greet: function() {
        console.log("Hello!");
    }
};

let student = {
    name: "Avinash"
};

// linking prototype
student.__proto__ = person;

student.greet(); // Hello!