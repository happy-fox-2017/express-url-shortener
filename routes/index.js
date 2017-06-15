var express = require('express');
var router = express.Router();
var model = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  model.Sort.findAll()
  .then((w)=>{
    res.render('index', {data: w})
  })
});

router.post('/urls', function(req, res, next) {
  console.log('in');
  model.Sort.create({
    url: req.body.url,
    count: 0
  })
  .then((user)=> {
    res.redirect('/')
  })
})

router.get('/:short_url', (req, res, next)=> {
  model.Sort.fd({
    where: {
      shorturl: req.params.short_url
    }
  })
  .then((url)=> {
    let last = url.count;
    url.updateAttributes({
      count: last+1
    })
    .then(()=> {
      res.redirect('/')
    })
  })
})

module.exports = router;
