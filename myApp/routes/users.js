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

router.get('/', function (req, res, next) {
  // res.send(req.query.id);
  Order.findById(req.query.id).exec( function(err,el){
  console.log("complete!");
  console.log(el);
  return res.json(el);
  // res.send(el);
})
});

router.post('/', function (req, res, next) {
  var names = req.body.requestHeader.orderId;
  Order.create({orderId:names,age:100
  
  })
    res.send("Complete!");
  
});

router.put('/:id', function (req, res, next) {
  Order.findByIdAndUpdate(req.params.id,{"orderId":"pokpak"} ,function(err,el){
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