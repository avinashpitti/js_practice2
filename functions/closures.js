/* closures :
    A closer happens when a function remembers and can access variables
    from its outer function even after the outer function has finished
    executing.  */

    function outer(){
    let count = 0;

    function inner(){
        count++;
        console.log(count);
    }

    return inner;
}

let counter = outer();

counter();
counter();
counter();