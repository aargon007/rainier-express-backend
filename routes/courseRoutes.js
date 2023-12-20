const express = require('express');
const { createCourse, getAllCourse, getSingleCourse, updateSingleCourse, deleteCourseById } = require('../controllers/courseController');

const router = express.Router();

// create course
router.post("/", createCourse);

// get all course
router.get("/", getAllCourse);

// get single course
router.get("/:id", getSingleCourse);

// update course
router.patch("/:id", updateSingleCourse);

// delete course
router.delete("/:id", deleteCourseById);

module.exports = router;