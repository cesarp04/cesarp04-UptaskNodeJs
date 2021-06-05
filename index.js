const express = require('express')
const routes = require('./routes')

// crear app de express
const app = express()

app.use('/',routes())

app.listen(3000)