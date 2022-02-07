const express = require('express')
const controller = require('../controllers/reales')

const router = express.Router()

router.get('/', controller.get)

module.exports = router
