        let user={
            name:"Avinash",
            age:21,
            city:'Bangalore'
        }

        console.log(user);
        console.log(user.name);
        console.log(user.city);
        console.log(user['age']);
        // modify object values
        user.city='Hyderabad'
        console.log(user.city);
        // add new property
        user.course='javascript'
        console.log(user)
        // delete property
        delete user.age
        console.log(user)

    let student = {
    name: "Avinash",
    skills: ["HTML","CSS","JavaScript"]
}

console.log(student.skills[1])