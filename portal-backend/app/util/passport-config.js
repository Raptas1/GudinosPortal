const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const {PortalDAO} = require("../database/PortalDAO");
const bcrypt = require("bcrypt");

const dao = new PortalDAO();
const localStrategy = new LocalStrategy({
  usernameField: 'username', 
  passwordField: 'password',
}, (username, password, done) => {
    try {
        dao.getUser(username, async (error, user) => {
            if(error) {
                return done(null, false, {message: "An Error has occurred"});
            }
            if(user) {
                const loginResponse = await bcrypt.compare(password, user.password);
                if(loginResponse == false) {
                    return done(null, false, {message: "Incorrect username or password"});
                }
                return done(null, user);
            }
            return done(null, false, {message: "Incorrect username or password"});
        });
    } catch(error) {
      console.log(error)
       return done(error);
    }
});

passport.serializeUser((user, done) => {
  console.log(`The user is ${user}`);
  process.nextTick(() => {
    done(null, user.id);
  });
});

passport.deserializeUser((user, done) => {
  process.nextTick(() => {
    return done(null, user);
  });
});

passport.use(localStrategy);

module.exports = passport;
