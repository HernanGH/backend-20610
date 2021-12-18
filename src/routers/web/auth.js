import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook'

import { Router } from 'express'

import path from 'path'

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

authWebRouter.get('/logout', (req, res) => {
    const nombre = req.user?.displayName ?? 'visitante'
    req.logout()
    res.render(path.join(process.cwd(), '/views/pages/logout.ejs'), { nombre })
})

export default authWebRouter