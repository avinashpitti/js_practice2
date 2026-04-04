let fruits=['mango','banana','avocado','apple','berry']

let sorted=fruits.sort()
console.log(sorted)

// numbers need a compare function
let nums=[34,7,19,2,44]
let ascending=nums.sort((a,b)=>(a-b))
console.log(ascending)

let descending=nums.sort((a,b)=>(b-a))
console.log(descending)