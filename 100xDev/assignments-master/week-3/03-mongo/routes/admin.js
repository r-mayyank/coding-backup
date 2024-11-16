const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    //check if user already exist
    Admin.create({
        username,
        password 
    })
    .then(function() {
        res.json({
            message: 'Admin created successfully'
        })
    })
    .catch(function() {
        res.sendStatus(500);
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const newCourse = await Course.create({
        title,
        description,
        price,
        imageLink
    })
    res.json({
            msg: "Course created successfully",
            courseId: newCourse._id
        })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({});
    res.json({
        courses: allCourses
    })
});

module.exports = router;