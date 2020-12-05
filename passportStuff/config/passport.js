const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../models');

//telling passport we want to use a Local Strategy
//We want login with a username/email and password
passport.use(
    new LocalStrategy(
        //user will sign in via email, rather than username
        {
            usernameField: 'email'
        },
        (email, password, done) => {
//when a user tries to sign in this code runs
            db.User.findOne({
                where: {
                    email: email
                }
            }).then(dbUser => {
                //if no user with given email
                if(!dbUser) {
                    return done(null, false, {
                        message: 'Incorrect email'
                    });
                }
//if there is a user with the given email,
//but given password is incorrect
                else if (!dbUser.validPassword(password)) {
                    return done(null, false, {
                        message: 'Incorrect password'
                    });
                }
                return done(null, dbUser);
            });
        }
    )
);

//in order to help keep authentication state across HTTP requests,
//sequelize needs to serialize and deserialize the user
//just consider this part boilerplate needed to make it all work
passport.serializeUser((user, cb) => {
    cd(null, user);
});

module.exports = passport;
