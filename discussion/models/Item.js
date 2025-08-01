const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
	
	name: {
		type: String,
		required: [true, 'Name is Required']
	},
	quantity: {
		type: Number,
		required: [true, 'Quantity is Required']
	},
	isActive: {
		type: Boolean,
		default: true
	}

});


module.exports = mongoose.model('Item', itemSchema);