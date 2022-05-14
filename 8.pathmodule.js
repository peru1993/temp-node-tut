
const first = require ('path')
console.log(first.sep)

// const filepath = first.join("/describe", "constant", "newsss")
// console.log(filepath)

// const base2 = first.basename(filepath)
// console.log(base2)


const base1 = first.resolve(__dirname, "describe", "constant")
console.log(base1)
