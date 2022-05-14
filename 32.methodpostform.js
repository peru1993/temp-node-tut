const express = require ('express')
const app = express()
let {people} = require('./data')

//static assets
app.use(express.static('./methodpublic'))

//parse form data
app.use(express.urlencoded({extended:false}))

//method post form examples

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true, data:people})
})

app.post('/login',(req,res)=>{
    const{name} = req.body
    if(name){
    return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send('Please Provide Your Credentials')
})

app.listen(5500,()=>{
    console.log('Server is listening On Port 5500.....')
})



//put method - postman output
// app.put('/api/people/:id',(req,res)=>{
//     const {id} = req.params
//     const {name} = req.body
//     console.log(id,name)
//     res.send('Hello world')
// })
