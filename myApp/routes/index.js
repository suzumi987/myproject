var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Order = mongoose.model('order');


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  Order.find(req.query).exec( function(err,el){
  console.log("complete!");
  console.log(el);
  // res.render('index', { title: 'hello', message: res.json(el) });
  res.render('index', {title:'hello', message:el})
});
});
// router.post('/', function (req, res, next) {
//   var names = req.body.requestHeader.orderId;
//   Order.create(req.body.requestHeader);
//     res.send("Complete!");
  
// });

// router.put('/:id', function (req, res, next) {
//   Order.findByIdAndUpdate(req.params.id,req.body.requestHeader ,function(err,el){
//     console.log(el);
//     return res.json(el);
//   });
// });

// router.delete('/:id', function (reqmyquery, res, next) {
//   Users.remove({_id:req.params.id},function(err,el){
//    res.json({code:200,message:el});
//   });
// });
module.exports = router;
