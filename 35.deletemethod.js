const express = require ('express')
const app = express()
let {people} = require('./data')

//static assets
app.use(express.static('./methodpublic'))

//parse form data
app.use(express.urlencoded({extended:false}))

app.use(express.json())

//delete method data

app.delete('/api/people/:id',(req,res)=>{
    const person = people.find((person) => person.id === Number(req.params.id)
    )
    console.log(person)
    if(!person){
        return res.status(400).json({success:false, message:`no person with id ${req.params.id}`})
    }
    const newpeople = people.filter((person)=>person.id !== Number(req.params.id))
    return res.status(200).json({success: true, data: newpeople})
})
    app.listen(5000,()=>{
    console.log('Server is listening On Port 5000.....')
})