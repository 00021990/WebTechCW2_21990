const express = require('express')
const recipeRouter = require('./recipe')


const router = express.Router()

router.use('/recipe', recipeRouter)


module.exports = router
