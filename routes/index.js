var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Url.findAll()
  .then(data =>{
    res.render('index', { data_url: data });
  })
  .catch(err =>{
    console.log(err);
  })
});

router.post('/',(req,res,next)=>{
  db.Url.create({ url: req.body.url })
  .then(data =>{
    res.redirect('/')
  })
  .catch(err=>{
    console.log(err);
  })
});

router.get('/delete/:id',(req,res,next)=>{
  let id = req.params.id
  
  db.Url.destroy( {where: {id: id}} )
  .then(()=>{
    res.redirect('/')
  })
  .catch(err=>{
    console.log(err);
  })
})

router.get('/:id',(req,res,next) =>{
  db.Url.findById(req.params.id)
  .then(find=>{
    db.Url.update({
      clicked: find.clicked +1
    },{where:{id: req.params.id}})
    res.redirect(`${find.url}`)
  })
  
})

module.exports = router;
