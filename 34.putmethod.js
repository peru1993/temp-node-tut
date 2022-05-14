const express = require ('express')
const app = express()
let {people} = require('./data')

//static assets
app.use(express.static('./methodpublic'))

//parse form data
app.use(express.urlencoded({extended:false}))

app.use(express.json())

//put method - postman output - sample example
// app.put('/api/people/:id',(req,res)=>{
//     const {id} = req.params
//     const {name} = req.body
//     console.log(id,name)
//     res.send('Hello world')
// })

//put method main example

app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person)=>
        person.id === Number(id))
    if(!person){
        return res.status(400).json({success:false,msg:`no person with id ${id}`})
    }
    const newpeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success:true, data:[newpeople]})
})

    app.listen(5000,()=>{
    console.log('Server is listening On Port 5000.....')
})

 

