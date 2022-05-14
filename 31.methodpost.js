const express = require ('express')
const app = express()
let {people} = require('./data')

//static assets
app.use(express.static('./methodpublic'))


app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true, data:people})
})

app.listen(5500,()=>{
    console.log('Server is listening On Port 5500...')
})
