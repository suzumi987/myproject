var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var order = new Schema(
    {
        orderId: String,
        offeringId: String,
        serviceId:String,
        serviceOrderId:String
    });

mongoose.model('order', order );


var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB,function(err , con){
    if(err){
        console.log(err);
        
    } else {
        console.log('connect database');
    }
});
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));