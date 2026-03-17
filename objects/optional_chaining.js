// optional chaining(?)
// optional chaining is used to safely access nested object properties
// without causing errors

// problem without optional chaining

// let user={
//     name:'Avinash'
// };
// console.log(user.address.city); // can't read properties of undefined

// with optional chaining
let user={
    name:'Avinash'
};
console.log(user?.address?.city); // undefined(no error)

//Basic usage
let emp={
    emp_name:'Rakesh',
};
console.log(emp?.emp_name); // Rakesh
console.log(emp?.emp_age); // undefined

// nested object
let employee={
    employee_name:'Nag',
    address:{
        city:'bengaluru',
        layout:'ramanjaneya layout'
    }
};

console.log(employee?.address?.city);
console.log(employee?.address?.layout);
console.log(employee?.address?.street);




