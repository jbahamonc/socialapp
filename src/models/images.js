const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = Schema({
   title : String,
   description : String ,
   url : { type : String },
   views : { type : Number, default : 0 },
   likes : { type : Number, default : 0 },
   timestamp : { type : Date, default : Date.now }
})

module.exports = mongoose.model('image', imageSchema)
