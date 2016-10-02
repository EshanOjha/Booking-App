var mongoose = require('mongoose');

// roomcalandar Schema
var roomcalandarSchema = mongoose.Schema({
	name:{
		type: String,
	},
    max_occupancy:{
       type:Number,
    },
    base_price:{
       type:Number,
    },
    availability:{
        type:String,
    },
    reservation:{
        type:String,
    },
    rate:{
        type:Number,
    },
    availableFrom:{
        type:Date,
    },
    availableUpto:{
        type:Date,
    },
    image_url:{
        type:String,
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

// Add room
module.exports.addRoom = function(roomCalandar,callback){
	roomcalandar.create(roomCalandar,callback);
}
