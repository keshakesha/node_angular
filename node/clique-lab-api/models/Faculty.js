//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var FacultySchema = new Schema({
    name: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });

// Compile modyel from schema
var Faculty = mongoose.model('faculties', FacultySchema, 'faculties');

module.exports = Faculty;