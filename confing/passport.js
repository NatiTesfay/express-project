// const keys = require("./keys")
// const userModel = require("../models/store")
// const JwtStrategy = require("passport-jwt").Strategy;
// const ExtractJwt = require("passport-jwt").ExtractJwt

// const options = {
//     secretOrKey:keys.secretKey,
//     jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
// }

// module.exports = (passport) => {
//     passport.use(
//     new JwtStrategy(options,(jts_payloda,done)=>{
//         userModel.findById(jts_payloda.id)
//         .then((user)=>{
//             console.log("user found");
//             return done(null,false)
//         })
        
//         .catch((error,)=>{
//             if (error) return console.log(error)
//             return done(false)
//         })
//     })
//     )
// }
