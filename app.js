const express = require('express')
const app = express()
const people = require('./routers/people')
const auth = require('./routers/auth')

//static assets
app.use(express.static('./methodpublic'))

//parse form data
app.use(express.urlencoded({extended:false}))

//parse json
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, ()=> {
    console.log('Server is listening On Port 5000.....')
})

