const express = require("express");
const workoutController = require("../controllers/workout");

const {verify} = require("../auth");

const router = express.Router();

router.post("/addWorkout", verify, workoutController.addWorkout);
router.get("/getMyWorkouts", verify, workoutController.getMyWorkouts);
router.get("/completeWorkoutStatus", verify, workoutController.completeWorkoutStatus);
router.patch("/updateWorkout/:id", verify, workoutController.updateWorkout);
router.delete("/deleteWorkout", verify, workoutController.deleteWorkout);


module.exports = router;