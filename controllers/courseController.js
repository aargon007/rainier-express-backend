const Course = require("../models/courseModel");

// create course
exports.createCourse = async (req, res) => {
	try {
		const newCourse = await Course.create(req.body);

		res.status(201).json({
			message: "The course has been added successfully",
		});
	} catch (err) {
		res
			.status(400)
			.json({ message: "Failed to create the course", error: err.message });
	}
};

// get all course
exports.getAllCourse = async (req, res) => {
	try {
		const courses = await Course.find();
		res.json(courses);
	} catch (err) {
		res
			.status(500)
			.json({ message: "Failed to fetch courses", error: err.message });
	}
};

// get single course
exports.getSingleCourse = async (req, res) => {
	try {
		const courseId = req.params.id;
		const course = await Course.findById(courseId);

		if (!course) {
			return res.status(404).json({ message: "Course not found" });
		}

		res.json(course);
	} catch (err) {
		res
			.status(500)
			.json({ message: "Failed to fetch the course", error: err.message });
	}
};

// update single course
exports.updateSingleCourse = async (req, res) => {
	try {
		const courseId = req.params.id;
		const updatedCourse = req.body;

		const course = await Course.findByIdAndUpdate(courseId, updatedCourse, {
			new: true,
		});

		if (!course) {
			return res.status(404).json({ message: "Course not found" });
		}

		res.json({ message: "Course updated successfully", course });
	} catch (err) {
		res
			.status(500)
			.json({ message: "Failed to update the course", error: err.message });
	}
};

// delete an course
exports.deleteCourseById = async (req, res) => {
	try {
		const courseId = req.params.id;

		const deletedCourse = await Course.findByIdAndDelete(courseId);

		if (!deletedCourse) {
			return res.status(404).json({ message: "Course not found" });
		}

		res.json({ message: "Course deleted successfully", deletedCourse });
	} catch (err) {
		res
			.status(500)
			.json({ message: "Failed to delete the course", error: err.message });
	}
};