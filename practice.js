let nested =[1,[2,3],[4,[5,6]],[7,8]]
console.log(nested.flat()) // first level
console.log(nested.flat(2)) // second level
console.log(nested.flat(Infinity)) // all levels at a time
