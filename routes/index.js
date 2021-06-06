const express = require('express')
const { proyectosHome } = require('../controllers/proyectosController')
const router = express.Router()

module.exports = function(){
    router.get('/', proyectosHome)
    

    return router
}