const express = require('express')
const router = express.Router()

const collection = require('../controllers/collection.controller')

router.get('/', collection.getAll)

module.exports = router