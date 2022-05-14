let {people} = require('../data')

const getPeoples = (req,res)=> {
    res.status(200).json({success:true, data:people})
}

const createPerson = (req,res) => {
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false,msg:'please provide name value'})
    }
    res.status(201).send({success:true, person:name})
}

const createPersonPostman = (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false,msg:'please provide name value'})
    }
    res.status(201).send({success:true, data:[...people,name]})
}

const updatePerson = (req,res)=>{
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person)=>{
        person.id === Number(id)
        // console.log(person)
    })
    if(!name){
        return res.status(400).json({success:false,msg:`no person with id ${id}`})
    }
    const newpeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
        
    })
    res.status(201).send({success:true, data:[newpeople]})
}

const deletePerson = (req,res)=>{
    const person = people.find((person) => person.id === Number(req.params.id)
        // console.log(person)
    )
    if(!person){
        return res.status(400).json({success:false, message:`no person with id ${req.params.id}`})
    }
    const newpeople = people.filter((person)=>person.id !== Number(req.params.id))
    return res.status(200).json({success: true, data: newpeople})
}

const loginPerson = (req,res)=>{
    const{name} = req.body
    if(name){
    return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send('Please Provide Your Credentials')
}

module.exports = {getPeoples,createPerson,createPersonPostman,updatePerson,deletePerson,loginPerson}