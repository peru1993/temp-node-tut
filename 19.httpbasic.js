const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('user hit a server')
    res.end()
})

server.listen(5000)

