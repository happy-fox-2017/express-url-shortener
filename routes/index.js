var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Url.findAll({order:[['id', 'ASC']]})
  .then((Url) => {
    res.render('index', {
      data: Url
    });
  })
});



router.post('/urls', function(req, res, next) {
  db.Url.create({
    long_url: req.body.Url,
    count:0
  })
  .then(() => {
    res.redirect('/')
  })
});

module.exports = router;
