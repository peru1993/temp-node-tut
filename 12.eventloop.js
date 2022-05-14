// const _ = require('lodash')
// // const items = [1,[2,[3,[4]]]]
// // const iteams = (['1','2','3','4'],2)
// const newitems = _.drop([1,2,3,4,5,6],1)
// console.log(newitems)


const http = require ('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page adfdff')
    }
    if(req.url === '/about'){
        //BLOCKING CODE !!!
        for(let i=0; i<1000;i++){
            for(let j=0; j<1000; j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end('Peru kiisdfdjf fskfjdkfj')
    }
        res.end('Error Page Peru')
    })

server.listen(5500,() => {
    console.log('Server Listening on port 5500.....!')
})