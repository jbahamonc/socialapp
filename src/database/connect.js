const mongoose = require('mongoose')
const config = require('../settings')

mongoose.connect(config.db, {
   useNewUrlParser : true
})
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('The Database is conected!!');
});
