require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require("./routes/workout");
const userRoutes = require("./routes/user");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/workouts", workoutRoutes);
app.use("/users", userRoutes);

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(() => {
	console.log("Connected to MongoDB Atlas");

	if (require.main === module) {
		app.listen(process.env.PORT || 4000, () => {
			console.log(`API is now online on port ${process.env.PORT || 4000}`);
		});
	}
})
.catch((err) => {
	console.error("❌ Failed to connect to MongoDB:", err.message);
	process.exit(1); // Exit if the DB fails
});

module.exports = { app, mongoose };
