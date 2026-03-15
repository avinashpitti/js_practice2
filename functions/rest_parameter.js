/*  Rest parameter :
        A rest parameter collects multiple arguments into a single array
        it is written using three dots (...parameterName)
        only one rest parameter is allowed
 */

// without rest parameter
function add(a,b,c){
    return a+b+c;
}
console.log(add(2,3,4));
// problem : If we pass more numbers, the function can't handle them.


// with rest parameter
function adding(...numbers){
    return numbers;
}
console.log(adding(1,2,3,4,5));
// Note : All arguments are stored in one array called numbers


// sum of unlimited numbers
function sum_of_nums(...nums){
    let total=0;
    for (let num of nums){
        total+=num;
    }
    return total;
}
console.log(sum_of_nums(1,2,3,4,5,6,7));