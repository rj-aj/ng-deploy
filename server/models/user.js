const uniqueValidator = require('mongoose-unique-validator');
const validator = require('validator');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		trim: true,
		minlength: 3,
		unique: true
	},
 }, { timestamps: true });


module.exports = mongoose.model('User', UserSchema);
