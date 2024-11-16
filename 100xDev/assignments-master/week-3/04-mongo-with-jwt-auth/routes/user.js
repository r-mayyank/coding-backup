const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    //check if user already exist
    const new_User = await User.create({
        username,
        password 
    })
    res.json({
        message: 'User created successfully'
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })

    if(user) {
        const token = jwt.sign({
            username
         }, JWT_SECRET);
    
         res.json({
            Token: token
         })
    } else {
        res.status(411).json({msg: "Wrong credentials"})
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({})
    res.json({
        courses: allCourses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;
    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        msg: "Purchase Complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;

    const user = await User.findOne({
        username: username,
    })
    const courses2 = await Course.findById(user.purchasedCourses)
    // const courses = await Course.find({
    //     _id: {
    //         "$in" : user.purchasedCourses
    //     }
    // })
    res.json({
        courses: courses2
    })
});

module.exports = router