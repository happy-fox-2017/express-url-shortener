



// driver di index.js



var express = require('express');
var router = express.Router();

// router.get('/index', function(req, res, next) {
//   res.render('index', { title: 'ini index' });
// yup index disini adalah = index.ejs ( pake cara render)
// });


// router.get("/product",function(req, res, next){
//   res.sendFile(path + "test.ejs");
// });
// jgn di sendFile nti nek pas meh rubah2 di for, dll repot nanti..


router.get("/halproduct",function(req, res, next){
  res.render("test" , { title: 'ini index' });
});


module.exports = router;
