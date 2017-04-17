var express = require('express');
var router = new express.Router();

router.use('/films', require('./films'));

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

// var statement = require('./films')
// console.log(statement)


module.exports = router;
