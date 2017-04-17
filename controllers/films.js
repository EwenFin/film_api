var Film = require('../client/src/models/film.js')
var films = require('../client/src/models/films.js')();


var express = require('express');
var filmRouter = new express.Router();

//ROUTES FOR films RESOURCE
//INDEX
filmRouter.get('/', function(req, res){
  res.json(films)
});

//SHOW
filmRouter.get('/:id', function(req, res){
  console.log(req.params);
  res.json({data: films[req.params.id]});
});

// //UPDATE
filmRouter.put('/:id', function(req, res){
  films[req.params.id] = new Film(req.body)
  res.json(films)
})

//CREATE
filmRouter.post('/', function(req, res){
  console.log(req.body);
  console.log(req)
  var newFilm = new Film(req.body);

  films.push(newFilm);
  res.json(films);
})

//DELETE
filmRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json(films)
})

module.exports = filmRouter;