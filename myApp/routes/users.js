var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Order = mongoose.model('order');

/* GET users listing. */
// router.get('/', function (req, res, next) {
//     // res.send(req.query.id);
//     Order.find({}).exec( function(err,el){
//     console.log("complete!");
//     console.log(el);
//     return res.json(el);
//     // res.send(el);
//   })
// });

router.get('/:id', function (req, res, next) {
  res.send(req.query.id);
  console.log(req.query)
  Order.find(req.query).exec( function(err,el){
  console.log("complete!");
  console.log(el);
  return res.json(el);

})
});

router.post('/', function (req, res, next) {
  var names = req.body.requestHeader.orderId;
  Order.create(req.body.requestHeader)
    res.send("Complete!");
  
});

router.put('/:id', function (req, res, next) {
  Order.findByIdAndUpdate(req.params.id,req.body.requestHeader ,function(err,el){
    console.log(el);
    return res.json(el);
  });
});

router.delete('/:id', function (reqmyquery, res, next) {
  Users.remove({_id:req.params.id},function(err,el){
   res.json({code:200,message:el})
  })
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;