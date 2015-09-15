var express = require('express');
var router = express.Router();
var Dog = require('../models/dogs.js');

//get all dogs
router.get('/dogs', function(req, res, next) {
  Dog.find(function(err, dogs) {
    if (err) {
      res.json({'message': err});
    } else {
      res.json(dogs);
    }
  });
});

//get single dog
router.get('/dog/:id', function(req, res, next){
  Dog.findById(req.params.id, function(err, dog) {
    if (err) {
      res.json({"message": err});
    } else {
      res.json(dog);
    }
  });
});

//post new dog
router.post('/dogs', function(req, res, next){
  var newDog = new Dog({
    name: req.body.name,
    breed: req.body.breed,
    age: req.body.age
  });
  newDog.save(function(err, dogs) {
    if (err) {
      res.json({'message': err});
    } else {
      res.json(dogs);
    }
  });
});

//update single dog
router.put('/dog/:id', function(req, res, next) {
  var update = {
    name: req.body.name,
    breed: req.body.breed,
    age: req.body.age
  };
  Dog.findByIdAndUpdate(req.params.id, update, {new:true}, function(err, dogs) {
    if (err) {
      res.json({'message': err});
    } else {
      res.json(dogs);
    }
  });
});

//remove single dog
router.delete('/dog/:id', function(req, res, next) {
  Dog.findByIdAndRemove(req.params.id, function(err, dogs) {
    if (err) {
      res.json({'message': err});
    } else {
      res.json(dogs);
    }
  });
});


module.exports = router;
