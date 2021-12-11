const passport = require('passport'); //gives express the idea of how to handle auth 
const GoogleStrategy = require('passport-google-oauth20').Strategy; //we use this to instruct passport on how to authenticate our users with google oauth
const mongoose = require('mongoose');
const keys = require('../config/keys');


const User = mongoose.model('users');

// new google strategy creates a new instance of the passport strategy.
// Passport.use is like a generic register "passport I want you to be aware that a new strategy is availible to authenticate users inside of our application"
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, 
(accessToken, refreshToken, profile, done) => {
new User({ googleId: profile }).save //this creates a new instance of a user, it represents a record that might exist in our DB.(.save saves it to the DB)

//access token is our oppertunity to now create a new user in our database with this identifying user information that was returned via google
}
)
); 