// const value1 = 8

// if(value1 < 10){
//     console.log("small no")
// }else{
//     console.log("large no")
// }

// console.log(`Hey this is very large no, and this is my first program for node.js !!!`)

// setInterval(() => {
//     console.log('hello world')
// }, 1000)

// Global

// console.log(__dirname);
// console.log(__filename);


const names = require('./3.firstname')
const sayhi1 = require('./4.firstname')
const data = require('./5.hello')
require('./6.helloo')
// console.log(names)
// console.log(sayhi1)


sayhi1("peru1")
sayhi1(names.sathish)
sayhi1(names.nakul)
sayhi1(names.secret)
console.log(data)


