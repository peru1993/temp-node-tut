const {readFile, writeFile} = require ('fs')

console.log('start')

readFile('./content/subfolder/first.txt', 'utf-8', (err,result)=>{
    if(err){
        console.log(err)
    }
    const first = result;
readFile('./content/subfolder/second.txt', 'utf-8', (err,result)=>{
    if(err){
    console.log(err)
    }
    const second = result;
            
        writeFile('./content/content1.txt',`Here is the result : ${first}, ${second}`,(err,result) =>{
                if(err){
                console.log(err)
                }
                console.log('done with the task')
                })
            })
    })
    console.log('starting next task')