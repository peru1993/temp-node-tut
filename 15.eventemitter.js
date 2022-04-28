const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',(name,id,name1) => {
    console.log(`data received ${name} and It was id ${id} and ${name1}`)
})

customEmitter.on('response',(name,id) => {
    console.log(`data received1 ${id}`)
})

customEmitter.emit('response','john',34,'ragu')

