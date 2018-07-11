const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); //fetching the model we added in User.js

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientId,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true //this tells google to trust proxies, might need to change in future by removing and changing URL above
		},
		(accessToken, refreshToken, profile, done) => {
			User.findOne({ googleId: profile.id }).then(existingUser => {
				//mongoose queries return promises
				if (existingUser) {
					done(null, existingUser);
				} else {
					new User({ googleId: profile.id }) //creates a mongoose model instance
						.save() //.save() actually adds this to the database
						.then(user => done(null, user)); //we make sure to call done if the promise returns so that we dont move on before we have actually saved it in the db
				}
			});
		}
	)
);
