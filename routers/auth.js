const express = require('express')
const router = express.Router()
const {loginPerson} = require ('../controller/people')

router.post('/',loginPerson)

module.exports = router