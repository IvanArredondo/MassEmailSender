const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	//you can freely add or subtract properties, no issue
	googleId: String,
	credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema); //tells mongoose we want to make a new collection called users, this also loads it into mongoose so we can use it throughout the app
