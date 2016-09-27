var mongoose = require('mongoose');

// roomtype Schema
var roomtypeSchema = mongoose.Schema({
	name:{
		type: String
	},
    base_price:{
       type: Number
    },
  
    max_occupancy:{
        type: Number
    }
	
});

var roomtype = module.exports = mongoose.model('roomType', roomtypeSchema,'roomtype');

// Get roomType
module.exports.getRoomType = function(callback, limit){
	roomtype.find(callback).limit(limit);
}


// Add roomType
module.exports.addRoomType = function(roomType,callback){
	roomtype.create(roomType,callback);
}