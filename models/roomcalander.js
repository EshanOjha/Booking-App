var mongoose = require('mongoose');

// roomcalandar Schema
var roomcalandarSchema = mongoose.Schema({
	name:{
		type: String,
        
	},
    roomtype:{
        type:String,
         required: true
    },
    availability:{
        type:String,
         required: true
    },
    reservation:{
        type:String,
         required: true
    },
    rate:{
        type:Number,
        required:true
    },
    availableFrom:{
        type:Date,
        required:true
    },
    availableUpto:{
        type:Date,
        required:true
    }
    
  
    
});

var roomcalandar = module.exports = mongoose.model('roomCalandar', roomcalandarSchema,'roomcalandar');

// Get roomcalander
module.exports.getRoomCalandar = function(callback, limit){
	roomcalandar.find(callback).limit(limit);
}

// Find room by Id
module.exports.getRoomById = function(id, callback){
	roomcalandar.findById(id, callback);
}