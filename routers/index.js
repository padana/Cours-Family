const express = require('express')
const router = express.Router()
const indexControllers = require('../controllers/index')



router.get('/', indexControllers.getIndex)
router.post('/Message', indexControllers.postMessage)


module.exports = router