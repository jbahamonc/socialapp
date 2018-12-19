const express = require('express')
const api = express.Router()

api.get('/', (req, res) => {
   res.send('hola mundo')
})

module.exports = api;
