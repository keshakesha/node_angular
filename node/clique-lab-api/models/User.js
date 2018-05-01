//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    dob: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone_number: { type: String, required: true },
    faculty: [{ type: mongoose.Schema.Types.ObjectId, ref: 'faculty' }],
    status: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });

// Compile model from schema
var User = mongoose.model('users', UserModelSchema, 'users');

module.exports = User;