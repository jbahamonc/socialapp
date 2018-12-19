const express = require('express')
const app = express()
const settings = require('./settings')
const routes = require('./routes')
const connect = require('./database/connect')
const path = require('path')

// App settings
app.set('views', path.join(__dirname, 'views'))
app.set('engine', 'pug')

//Middlewares
app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use('/public', express.static(path.join(__dirname, 'public')))

// settings routes
app.use(routes)

// Run app
app.listen(settings.port, () => {
   console.log(`Server running on http://localhost:${settings.port}`);
})
