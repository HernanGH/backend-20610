import express from 'express'
import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import jwt from 'jsonwebtoken'

// import { productosDao as productosApi, } from '../daos/index.js'
// import soloAdmins from '../middlewares/index.js'

const { Router } = express

const usuarios = []

passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret',
    },
    (jwtPayload, done) => {
      console.log({jwtPayload});
      done(null, jwtPayload)
      // User.findOne({id: jwt_payload.sub}, function(err, user) {
      //   if (err) {
      //       return done(err, false);
      //   }
      //   if (user) {
      //       return done(null, user);
      //   } else {
      //       return done(null, false);
      //       // or you could create a new account
      //   }
      // });
    }
  )
)

//--------------------------------------------
// configuro router de authentication
const authRouter = new Router()

authRouter.post('/login', (req, res) => {
  let user = usuarios.find(usuario => usuario.username == req.body.username)
  if (!user) return res.status(400).json({ message: 'User not exist' })
  
  let success = user.password == req.body.password; // En caso de usar filter linea 25 -> user[0] 
  if (!success) return res.status(400).json({ message: 'Mail or Password was wront' });
  
  user.count = 0;
  const token = jwt.sign(user, 'secret');

  return res.status(200).json({ user, token });
})

authRouter.post('/sign-up', (req, res) => {
  const count = usuarios.filter(usuario => usuario.username == username).length;
  if (count) return done(null,false)

  let user = req.body;
  user.count = 0;
  usuarios.push(user)
  return res.status(200).json({ user });
})

authRouter.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json(req.user.profile)
})

export default authRouter