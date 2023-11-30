// Create web server
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

// Path: /comments
router.get('/', function(req, res) {
  Comment.find(function(err, comments){
    res.json(comments);
  });
});

// Path: /comments
router.post('/', function(req, res) {
  var comment = new Comment(req.body);
  comment.save(function(err, comment){
    res.json(comment);
  });
});

// Path: /comments/:id
router.get('/:id', function(req, res) {
  Comment.findById(req.params.id, function(err, comment){
    res.json(comment);
  });
});

// Path: /comments/:id
router.put('/:id', function(req, res) {
  Comment.findByIdAndUpdate(req.params.id, req.body, function(err, comment){
    res.json(comment);
  });
});

// Path: /comments/:id
router.delete('/:id', function(req, res) {
  Comment.findByIdAndRemove(req.params.id, function(err, comment){
    res.json(comment);
  });
});

module.exports = router;
