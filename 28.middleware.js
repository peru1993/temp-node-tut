const express = require ('express')
const logger = require('./logger')
const app = express()


// req => middleware => res

// const logger = (req, res, next) =>{
//     const method = req.method
//     const url = req.url
//     const time = new Date().getFullYear()
//     console.log(method,url,time)
//     next()
// }

//app use
app.use(logger)

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
    res.send('Items')
})

app.listen(5500,()=>{
    console.log('Server is listening On Port 5500.....')
})


