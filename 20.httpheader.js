const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>Home Page instruciton</h1>')
    console.log('user hit a server')
    res.end()
})

server.listen(5000)

