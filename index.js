const express = require('express')
const routes = require('./routes')
const path =  require('path')

// crear app de express
const app = express()

// Habilitar Pug
app.set('view engine', 'pug')

// Anadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'))

app.use('/',routes())

app.listen(3000)