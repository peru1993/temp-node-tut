const http = require('http');
const {readFileSync} = require('fs');

//get all files
const homePage = readFileSync('./navbar-app/index.html','utf-8')
const homestyle = readFileSync('./navbar-app/styles.css','utf-8')
const homeimage = readFileSync('./navbar-app/logo.svg','utf-8')
const homelogic = readFileSync('./navbar-app/browser-app.js','utf-8')
// console.log(homePage)

const server = http.createServer((req,res)=>{
    // console.log(req.method)
    const url = req.url;
    // console.log(url)
    //homepage
    if(url === '/'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write(homePage)
    res.end()
    }
    //about Page
    else if(url === '/about'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>About Page</h1>')
    res.end()
    }
    //styles
    else if(url === '/styles.css'){
    res.writeHead(200,{'content-type':'text/css'})
    res.write(homestyle)
    res.end()            
    }
    //images/log
    else if(url === '/logo.svg'){
    res.writeHead(200,{'content-type':'image/svg+xml'})
    res.write(homeimage)
    res.end()            
    }
    else if(url === '/browser-app.js'){
    res.writeHead(200,{'content-type':'text/javascript'})
    res.write(homelogic)
    res.end()
    }

    //404 - error

    else {
    res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1>Page is not found</h1>')
    res.end()            
    }
})

server.listen(5500)

