var mongoose = require('mongoose');

// roombook Schema
var roomBookSchema = mongoose.Schema({
	checkInDate:{
		type: Date,
     
	},
    
    checkOutDate:{
		type: Date,
     
	},
    
    max_occupancy:{
        type: Number,
     
    },
    
    roomId:{
        type:String,
     
    }
    
	
});

var roombooked = module.exports = mongoose.model('roomBook',roomBookSchema,'roombooked');



// Add roomType
module.exports.addRoom = function(roombook,callback){
	roombooked.create(roombook,callback);
}


