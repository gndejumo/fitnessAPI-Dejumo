const Item = require("../models/Workout");

module.exports.addWorkout = (req, res) => {
	let newWorkout = new Workout({
		name: req.body.name,
		duration: req.body.duration
	});

	newWorkout.save()
		.then(savedWorkout => res.status(201).send(savedWorkout))
		.catch(saveErr => {
			console.error("Error saving workout:", saveErr);
			return res.status(500).send({ error: 'Failed to save workout' });
		});
};

module.exports.getMyWorkouts = (req, res) => {

	Workout.find({})
	.then(workouts => {

	    if (items.length > 0){
	        return res.status(200).send({ workouts });
	    }
	    else {

	        return res.status(200).send({ message: 'No workout found.' })
	    }

	}).catch(err => res.status(500).send({ error: 'Error finding workout.' }));

};

module.exports.completeWorkoutStatus = (req, res) => {
	Workout.find({ status: 'completed' })
		.then(completedWorkouts => {
			if (completedWorkouts.length > 0) {
				return res.status(200).send({ workouts: completedWorkouts });
			} else {
				return res.status(200).send({ message: 'No completed workouts found.' });
			}
		})
		.catch(err => {
			console.error("Error fetching completed workouts:", err);
			return res.status(500).send({ error: 'Failed to retrieve completed workouts.' });
		});
};

module.exports.updateWorkout = (req, res) => {
	const workoutId = req.params.id;
	const newStatus = req.body.status;

	if (!newStatus) {
		return res.status(400).send({ error: 'New status is required.' });
	}

	Workout.findByIdAndUpdate(workoutId, { status: newStatus }, { new: true })
		.then(updatedWorkout => {
			if (!updatedWorkout) {
				return res.status(404).send({ error: 'Workout not found.' });
			}

			return res.status(200).send({
				message: 'Workout status updated successfully.',
				updatedWorkout
			});
		})
		.catch(err => {
			console.error("Error updating workout status:", err);
			return res.status(500).send({ error: 'Failed to update workout status.' });
		});
};


module.exports.deleteWorkout = (req, res) => {

    return Workout.deleteOne({ _id: req.params.id})
    .then(deletedResult => {

        if (deletedResult < 1) {

            return res.status(400).send({ error: 'No Workout deleted' });

        }

        return res.status(200).send({ 
        	message: 'Workout deleted successfully'
        });

    })
    .catch(err => {
		console.error("Error in deleting an Workout : ", err)
		return res.status(500).send({ error: 'Error in deleting an Workout.' });
	});
};

