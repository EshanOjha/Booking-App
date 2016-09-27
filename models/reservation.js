var mongoose = require('mongoose');

// reservation Schema
var reservationSchema = mongoose.Schema({
	total_price:{
		type: String,
        required: true
	},
    occupancy:{
		type: String,
        required: true
	},
    checkin:{
		type: Date,
        required: true
	},
    checkout:{
        type:Date,
        required:true
    },
    customer:{
        type:String,
        required: true
    }
});

var Reservation = module.exports = mongoose.model('reservation', reservationSchema,'reservation');


// Get roomType
module.exports.getReservations = function(callback, limit){
	Reservation.find(callback).limit(limit);
}

