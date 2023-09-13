require('dotenv').config();
const express = require("express");
const {PortalDAO} = require('./app/database/PortalDAO')
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const passport = require("./app/util/passport-config");
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const MongoDBStore = require("connect-mongodb-session")(sessions)


const app = express();
const port = "3001";

const store = new MongoDBStore({
  uri: `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.hvkz7.mongodb.net/?retryWrites=true&w=majority`,
  databaseName: process.env.MONGODB_DATABASE,
  collection: "Sessions"
}, (error) => {
  console.log(error)
})

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());

app.use(sessions({
    secret: process.env.SESSION_KEY,
    saveUninitialized:true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    store: store,
    resave: false 
}));

app.use(passport.initialize())
app.use(passport.session());

const dao = new PortalDAO();

app.get("/authenticated", (req, res) => {

})

app.post("/login", (req, res, next) => {
    try {
      passport.authenticate('local', (err, user, info) => {
        if(err) {
          res.status(500).send(info.message)
        }
        if(!user) {
          return res.status(401).send(info.message)
        }
        req.logIn(user, (err) => {
          if(err) {
            next(err);
          }
          return res.sendStatus(200);
        })
      })(req,res,next);
    } catch(error) {
        console.log(error);
    }

})

app.listen(port, async () => {
    console.log("Portal Backend is up on port: " + port);
})