const express = require('express')
const router = express.Router()

//Importaciones de archivos internos
const bookGet = require('../controllers/book.get')
const bookPost = require('../controllers/book.post')
const bookDelete = require("../controllers/book.delete")
const bookUpdate = require('../controllers/book.delete')


router.get('/' , bookGet )


router.post('/' ,  bookPost)

router.delete('/:id' , bookDelete)


router.put('/:id' , bookUpdate)






module.exports = router