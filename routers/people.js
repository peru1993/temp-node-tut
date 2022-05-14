const express = require ('express')
const router = express.Router()
const {getPeoples,createPerson,createPersonPostman,updatePerson,deletePerson} = require ('../controller/people')

router.get('/', getPeoples)
router.post('/', createPerson)
router.post('/postman', createPersonPostman)
router.put('/:id', updatePerson)
router.delete('/:id', deletePerson)

module.exports = router