var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */
router.get('/', (req,res,next) =>{
  res.redirect("/url");
})

router.get('/url', (req, res, next) => {
  db.UrlCount.findAll()
  .then((UrlCounts) =>{
    res.render("index", {urls: UrlCounts});
  })
  .catch((err) => {
    console.log(""+err);
  });
});


router.get('/url/addurl', (req,res) =>{
  res.render("addurl");
})

router.post('/url/addurl', (req,res) =>{
  let url = req.body.Url;
  db.UrlCount.create({
    'url' : url
  })
  .then(()=>{
    res.redirect('/url');
  })
  .catch((err) => {
    console.log(err);
  })

});

router.get('/url/search/:short_url', (req,res,next) =>{
  let url_choose = req.params.short_url;
  let count_url = 0;
  db.UrlCount.find({
  where: {
     'shortUrl' : url_choose
  }
  })
  .then((url) => {
    if (!url) {
      console.log('not find');
    }
    //res.redirect(url.url);
    count_url += url.count;
    
    db.UrlCount.update({
       count : count_url + 1
     }, {
       where: {
         'shortUrl' : url_choose
       }
     })
     .then(() => {
       res.redirect(url.url);
     });
   });
});

module.exports = router;
