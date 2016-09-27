var mongoose = require('mongoose');

// roomtype Schema
var customerSchema = mongoose.Schema({
	firstName:{
		type: String,
        required:true
	},
	lastName:{
		type: String,
        required:true
	},
	email:{
		type: String,
        required:true
	},

	
});

var customers = module.exports = mongoose.model('customer', customerSchema,'customer');

// Get customer
module.exports.getCustomers = function(callback, limit){
	customers.find(callback).limit(limit);
}