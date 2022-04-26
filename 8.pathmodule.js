
const first = require ('path')
console.log(first.sep)

// const filepath = first.join("/describe", "constant", "newsss")
// console.log(filepath)

// const base = first.basename(filepath)
// console.log(base)

const base1 = first.resolve(__dirname, "describe", "constant", "newsss")
console.log(base1)
