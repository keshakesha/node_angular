var Faculty = require("./../models/Faculty");
var faculty_helper = {};
/*
 * get_all_faculty is used to fetch all faculty data
 * 
 * @return  status 0 - If any internal error occured while fetching faculty data, with error
 *          status 1 - If faculty data found, with faculty object
 *          status 2 - If faculty not found, with appropriate message
 */
faculty_helper.get_all_faculty = async () => {
    try {
        var faculty = await Faculty.find({},{"name":1});
        if (faculty) {
            return { "status": 1, "message": "faculty found", "faculty": faculty };
        } else {
            return { "status": 2, "message": "No faculty available" };   
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding faculty", "error": err }
    }
}

module.exports = faculty_helper;