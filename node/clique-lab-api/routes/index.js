var express = require('express');
var router = express.Router();
var config = require('../config');
var fs = require("fs");
const saltRounds = 10;
var async = require("async");
var user_helper = require('./../helpers/user_helper');
console.log("index.js");
var logger = config.logger;

// Tested - OK
/**
 * @api {post} /user_signup user Signup
 * @apiName user Signup
 * @apiGroup Root
 * 
 * @apiDescription  Signup request for user role
 * 
 * @apiHeader {String}  Content-Type application/json
 * 
 * @apiSuccess (Success 200) {String} message Success message
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post('/user_signup', async (req, res) => {

    logger.trace("API - user signup called");
    logger.debug("req.body = ", req.body);
    var schema = {
        'first_name': {
            notEmpty: true,
            errorMessage: "First name is required"
        },
        'last_name': {
            notEmpty: true,
            errorMessage: "Last name is required"
        },
        'dob': {
            notEmpty: true,
            errorMessage: "Date of Birth is required"
        },
        'email': {
            notEmpty: true,
            errorMessage: "Email address is required",
            isEmail: { errorMessage: "Please enter valid email address" }
        },
        'phone_number': {
            notEmpty: true,
            errorMessage: "Phone Number is required"
        },
        // 'faculty': {
        //     notEmpty: true,
        //     errorMessage: "Faculty is required"
        // }
    };
    req.checkBody(schema);
    var errors = req.validationErrors();
    if (!errors) {
        let data = req.body;
        var user_obj = {
            "first_name": req.body.first_name,
            "last_name": req.body.last_name,
            "dob": req.body.dob,
            "email": req.body.email,
            "phone_number": req.body.phone_number,
            "faculty": req.body.faculty
        };

        // Check email availability
        var user = await user_helper.get_user_by_email(req.body.email)
        if (user.status === 2) {
            // Insert user
            var user_data = await user_helper.insert_user(user_obj);

            if (user_data.status == 0) {
                logger.trace("Error occured while inserting user - User Signup API");
                logger.debug("Error = ", user_data.error);
                res.status(config.INTERNAL_SERVER_ERROR).json(user_data);
            } else {
                logger.trace("user has been inserted");
                res.status(config.OK_STATUS).json({ "status": 1, "message": "success" });
            }

        } else {
            res.status(config.BAD_REQUEST).json({ "status": 0, "message": "user's email already exist" });
        }
    } else {
        logger.error("Validation Error = ", errors);
        res.status(config.BAD_REQUEST).json({ message: errors });
    }
});

router.get('/index/:page_no/:serach', async (req, res) => {
    logger.trace("Get all users API called");
    // var resp_data = await user_helper.get_all_user();
    var resp_data = await user_helper.get_filtered_user(req.params.page_no, req.params.serach);
    if (resp_data.status == 0) {
        logger.error("Error occured while fetching Users = ", resp_data);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
    } else {
        logger.trace("Users got successfully = ", resp_data);
        res.status(config.OK_STATUS).json(resp_data);
    }
});

router.get('/user_count', async (req, res) => {
    logger.trace("Get all users count API called");
    // var resp_data = await user_helper.get_all_user();
    var resp_data = await user_helper.user_count();
    if (resp_data.status == 0) {
        logger.error("Error occured while fetching Users = ", resp_data);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
    } else {
        logger.trace("Users count successfully = ", resp_data);
        res.status(config.OK_STATUS).json(resp_data);
    }
});

/**
 * Delete user by id  
 */
router.delete('/:user_id', async (req, res) => {
    var user_resp = await user_helper.delete_user_by_id(req.params.user_id);
    if (user_resp.status === 0) {
        res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error occured while deleting user", "error": user_resp.error });
    } else if (user_resp.status === 2) {
        res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Can't delete user" });
    } else {
        res.status(config.OK_STATUS).json({ "status": 1, "message": "User has been deleted" });
    }
});

module.exports = router;