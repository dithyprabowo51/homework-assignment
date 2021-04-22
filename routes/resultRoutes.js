const router = require('express').Router()
const resultController = require('../controllers/resultController.js')

router.get('/', resultController.getResult)

module.exports = router