import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook'

import { Strategy as LocalStrategy } from 'passport-local'

import { Router } from 'express'

import path from 'path'
import createHash from '../../utils/createHash.js'
import User from '../../models/User.js'
import isValidPassword from '../../utils/isValidPassword.js';

const FACEBOOK_CLIENT_ID = '261343709172083';
const FACEBOOK_CLIENT_SECRET = 'ccf3f6a0b43557c4e2a0924f06a35b4e';

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'photos', 'emails'],
    scope: ['email']
}, function (accessToken, refreshToken, profile, done) {
    let userProfile = profile;
    return done(null, userProfile);
}));

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

const authWebRouter = new Router()

authWebRouter.get('/login', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/')
    } else {
        res.sendFile(path.join(process.cwd(), '/views/login.html'))
    }
})

authWebRouter.get('/auth/facebook', passport.authenticate('facebook'));
authWebRouter.get('/auth/facebook/callback', passport.authenticate('facebook',
    {
        successRedirect: '/',
        failureRedirect: '/faillogin'
    }
));

authWebRouter.get('/faillogin', (req, res) => {
    res.render('/views/pages/login-error.ejs');
})

authWebRouter.get('/failsignup', (req, res) => {
    res.render('/views/pages/signup-error.ejs');
})

authWebRouter.get('/logout', (req, res) => {
    const nombre = req.user?.displayName ?? 'visitante'
    req.logout()
    res.render(path.join(process.cwd(), '/views/pages/logout.ejs'), { nombre })
})

passport.use('login', new LocalStrategy((username, password, done) => {
    User.findOne({ email: username }, (error, user) => {
        console.log({user});
        if (error)
            return done(error);
    
        if (!user) {
            console.log('User Not Found with username ' + username);
            return done(null, false);
        }
    
        if (!isValidPassword(user, password)) {
            console.log('Invalid Password');
            return done(null, false);
        }

        console.log({error, user});
        return done(null, {});
    })
}))

passport.use('singup', new LocalStrategy(
    { passReqToCallback: true },
    (req, username, password, done) => {
    User.findOne({ email: username }, (error, user) => {
        if (err) {
            console.log('Error in SignUp: ' + err);
            return done(err);
        }
        
        if (user) {
            console.log('User already exists');
            return done(null, false)
        }
        
        const newUser = {
            username: username,
            password: createHash(password),
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        };
        User.create(newUser, (error, userCreated) => {
            if (error) {
                console.log('Error in Saving user: ' + err);
                return done(err);
            }
            console.log(user)
            console.log('User Registration succesful');
            return done(null, userCreated);
        });
    })
}))

authWebRouter.post(
    '/auth/local',
    passport.authenticate('login', { failureRedirect: '/faillogin'}),
    (req, res) => {
        res.redirect('/')
    }
);

authWebRouter.post(
    '/signup/local',
    passport.authenticate('signup', { failureRedirect: '/failsignup'}),
    (req, res) => {
        res.redirect('/')
    }
);


export default authWebRouter