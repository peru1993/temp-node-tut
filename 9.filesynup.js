const {readFileSync, writeFileSync} = require ('fs')
console.log('start')
const first = readFileSync("./content/subfolder/first.txt", 'utf-8')
const second = readFileSync("./content/subfolder/second.txt", 'utf-8')

writeFileSync('./content/content1.txt',`Here is the result : ${first}, ${second}`,{flag: 'a'})
console.log('done with the task')
console.log('starting the next one')



