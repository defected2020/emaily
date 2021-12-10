const passport = require('passport');

module.exports = (app) => {

            // whenever a user navigates to auth/google, we want to kick them into our oauth flow
        // which is being entirely managed by passport, telling the passport to use the strategy called google (passport has an internal strategy named google)
        app.get('/auth/google', passport.authenticate('google',{
            scope: ['profile', 'email'] //scope tells google which access we need to have inside of the users profile
            })
            );
            
            //here passport will see the code inside the url after /callback because the user will have the code the google handler will handle the request a little differently. 
        app.get('/auth/google/callback', passport.authenticate('google'));
};



