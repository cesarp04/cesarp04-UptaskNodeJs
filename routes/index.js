const express = require('express')
const router = express.Router()

module.exports = function(){
    router.get('/', (req,res)=> {
        res.send('Hello world')
    })
    router.get('/hola',(req,res)=>{
        res.send('hola')
    })

    return router
}