const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
	
	name: {
		type: String,
		required: [true, 'Name is Required']
	},
	duration: {
		type: Number,
		required: [true, 'Duration is Required']
	},
	dateAdded: {
		type: Date,
		default: Date.now
	},
	status: {
		type: String,
		enum: ['pending', 'active', 'completed', 'skipped', 'cancelled'],
		default: 'pending'
	}

});


module.exports = mongoose.model('Workout', workoutSchema);