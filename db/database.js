const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
	// get the mongodb server address

	const URI = process.env.REMOTE_URI;
	try {
		// connect mongodb through mongoose
		await mongoose.connect(URI);

		console.log("Connected to MongoDB");
	} catch (error) {
		console.error("Failed to connect to MongoDB", error);
		process.exit(1);
	}
};

module.exports = connectDB;