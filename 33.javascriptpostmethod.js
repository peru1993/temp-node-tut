const express = require ('express')
const app = express()
let {people} = require('./data')

//static assets
app.use(express.static('./methodpublic'))

//parse form data
app.use(express.urlencoded({extended:false}))

app.use(express.json())

//method post form examples

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true, data:people})
})

//method post javascript examples

app.post('/api/people',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false,msg:'please provide name value'})
    }
    res.status(201).send({success:true, person:name})
})

app.post('/login',(req,res)=>{
    const{name} = req.body
    if(name){
    return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send('Please Provide Your Credentials')
})

    app.listen(5000,()=>{
    console.log('Server is listening On Port 5000.....')
})

 

//put method - postman output
// app.put('/api/people/:id',(req,res)=>{
//     const {id} = req.params
//     const {name} = req.body
//     console.log(id,name)
//     res.send('Hello world')
// })
