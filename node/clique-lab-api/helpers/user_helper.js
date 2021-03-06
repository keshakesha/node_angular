var User = require("./../models/User");
var user_helper = {};

/*
 * get_all_user is used to get all user
 * 
 * @return  status 0 - If any internal error occured while fetching user data, with error
 *          status 1 - If user data found, with user's documents
 *          status 2 - If user not found, with appropriate message
 */
user_helper.get_all_user = async () => {
    try {
        var users = await User.find({ "status": true }, {});
        console.log(users);
        if (users && users.length > 0) {
            return { "status": 1, "message": "users found", "users": users };
        } else {
            return { "status": 2, "message": "users not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding users", "error": err }
    }
}

/*
 * get_user_by_id is used to fetch user details by user id
 * 
 * @params  user_id     _id field of user collection
 * 
 * @return  status 0 - If any internal error occured while fetching user data, with error
 *          status 1 - If user data found, with user object
 *          status 2 - If user not found, with appropriate message
 */
user_helper.get_user_by_id = async (user_id) => {
    try {
        var user = await User.findOne({ "_id": { "$eq": user_id } });
        if (user) {
            return { "status": 1, "message": "user details found", "user": user };
        } else {
            return { "status": 2, "message": "user not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding user", "error": err }
    }
};

/*
 * get_user_by_email is used to fetch single user by email address
 * 
 * @param   email   Specify email address of user
 * 
 * @return  status  0 - If any error occur in finding user, with error
 *          status  1 - If user found, with found user document
 *          status  2 - If user not found, with appropriate error message
 * 
 * @developed by "ar"
 */
user_helper.get_user_by_email = async (email) => {
    try {
        var user = await User.findOne({ "email": email }).lean();
        if (user) {
            return { "status": 1, "message": "user details found", "user": user };
        } else {
            return { "status": 2, "message": "user not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding user", "error": err }
    }
};

/*
 * insert_user is used to insert into user collection
 * 
 * @param   user_object     JSON object consist of all property that need to insert in collection
 * 
 * @return  status  0 - If any error occur in inserting user, with error
 *          status  1 - If faculty inserted, with inserted user's document and appropriate message
 * 
 * @developed by "ar"
 */
user_helper.insert_user = async (user_object) => {
    let user = new User(user_object)
    try {
        let user_data = await user.save();
        return { "status": 1, "message": "user inserted", "user": user_data };
    } catch (err) {
        return { "status": 0, "message": "Error occured while inserting user", "error": err };
    }
};

/*
 * update_user_by_id is used to update user data based on user_id
 * 
 * @param   user_id         String  _id of user that need to be update
 * @param   user_object     JSON    object consist of all property that need to update
 * 
 * @return  status  0 - If any error occur in updating user, with error
 *          status  1 - If user updated successfully, with appropriate message
 *          status  2 - If user not updated, with appropriate message
 * 
 * @developed by "ar"
 */
user_helper.update_user_by_id = async (user_id, user_object) => {
    try {
        let user = await User.findOneAndUpdate({ _id: user_id }, user_object);
        if (!user) {
            return { "status": 2, "message": "Record has not updated" };
        } else {
            return { "status": 1, "message": "Record has been updated", "user": user };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while updating user", "error": err }
    }
};

/*
 * get_filtered_user is used to get user based on given filter
 * 
 * @param   page_no     Integer page number
 * @param   page_size   Integer Total number of record per page
 * @param   filter      Array   Filter conditions for aggregate
 * @param   sort        Array   Sorting criteria for aggregate
 * 
 * @return  status 0 - If any internal error occured while fetching user data, with error
 *          status 1 - If user data found, with user's documents
 *          status 2 - If user not found, with appropriate message
 */
// user_helper.get_filtered_user = async (page_no, page_size, filter, sort) => {
user_helper.get_filtered_user = async (page_no, serach) => {
    page_size = 2;
    console.log("==> " + page_no);
    try {
        skip = page_size * (page_no - 1)
        if (serach != '') {
            let users = await User.find({ first_name: /^serach/ }).limit(page_size).skip(skip);
        } else {
            let users = await User.find().limit(page_size).skip(skip);
        }
        if (users && users.length > 0) {
            return { "status": 1, "message": "Users found", "results": users };
        } else {
            return { "status": 2, "message": "No user found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding user", "error": err }
    }
};


user_helper.delete_user_by_id = async (user_id) => {
    try {
        let resp = await User.findOneAndRemove({ _id: user_id });
        if (!resp) {
            return { "status": 2, "message": "User not found" };
        } else {
            // Delete all data related to campaign
            return { "status": 1, "message": "success", "resp": resp };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while deleting campaign", "error": err };
    }
}

user_helper.user_count = async () => {
    try {
        let resp = await User.count();
        if (!resp) {
            return { "status": 2, "message": "User not found" };
        } else {
            // Delete all data related to user
            return { "status": 1, "message": "success", "resp": resp };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while deleting user", "error": err };
    }
}

module.exports = user_helper;