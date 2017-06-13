var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  db.Url.findById(req.params.id)
    .then((Url) => {
      let counter = Url.count
      Url.updateAttributes({
        count: counter+1
      })
      res.redirect(`${Url.long_url}`)
    })
});

module.exports = router;