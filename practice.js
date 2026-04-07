// function* gen(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let g=gen();

// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());


function* numbers() {
  for (let i = 1; i <= 3; i++) {
    yield i;
  }
}

for (let num of numbers()) {
  console.log(num);
}

function* gen() {
  console.log("Start");
  yield 10;
  console.log("Middle");
  yield 20;
  console.log("End");
}

let g = gen();

// g.next();
// g.next();
g.next();



let arr = [10, 20];

let it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());