const express = require ('express')
const app = express()
const logger = require('./logger') //additional middleware function
const authorize = require('./authorize') //additional middleware function
const morgan = require('morgan') //third party middleware

//app use
// app.use(morgan('tiny'))
app.use(logger,authorize)
// app.use(express.static('./public')) //local middleware
// most important one

app.get('/', (req,res)=>{
    res.send('Home')
})

app.get('/about', (req,res)=>{
    res.send('About Page')
})

app.get('/api/products', (req,res)=>{
    res.send('Products')
})
app.get('/api/items', (req,res)=>{
    console.log(req.user)
    res.send('Items')
})

app.listen(5500,()=>{
    console.log('Server is listening On Port 5500.....')
})


