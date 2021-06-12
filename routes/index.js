const express = require('express')
const { proyectosHome, formularioProyecto } = require('../controllers/proyectosController')
const router = express.Router()

module.exports = function(){
    router.get('/', proyectosHome)
    router.get('/nuevo-proyecto', formularioProyecto)

    return router
}