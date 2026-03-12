//switch statement: The switch statement is used when we have
// multiple possible values for one variable
// It is often used instead of many else if

// switch:checks the variable
// case:possible value
// break:stops execution
// default:runs if no execution

let day = 3;

switch(day){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}


let grade='B';
// In this case without break it prints everything from case B
switch(grade){
    case 'A':
        console.log('Excellent');
        break;
    
    case 'B':
        console.log('Good');
        break;

    case 'C':
        console.log('Average');
        break;

    case 'D':
        console.log('Just pass');
        break;
    
    default:
        console.log('You failed the exam')

}


