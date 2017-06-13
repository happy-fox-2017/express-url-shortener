var express = require('express');
var router = express.Router();
let db = require('../models')

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index')
})

router.get('/:short_url', (req, res) => {
  let searched = req.params.short_url
  db.Url.findOne({where: {short_url: {like: '%'+searched+'%'}}}).then(url => {
    console.log(url);
    let webUrl = url.norm_url
    url.increment('click_count', {by: 1})
    res.redirect(`${webUrl}`)
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/main/urls', function(req, res, next) {
  db.Url.findAll({order: 'id desc'})
  .then(urls => {
    res.render('urls', {data : urls})
  })
});


router.post('/main/url/create', (req, res) => {
  let normalUrl = req.body.norm_url
  let coba = req.body
  db.Url.create({norm_url : normalUrl}).then((url) => {
    res.redirect('/main/urls')
  })
  .catch(err => {
    console.log("error message");
    console.log(err);
  })
})

module.exports = router;
