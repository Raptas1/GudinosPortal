require('dotenv').config();
const express = require("express");
const {PortalDAO} = require('./app/database/PortalDAO')
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const app = express();
const port = "3001";

app.use(bodyParser.json());
app.use(cookieParser());

app.use(sessions({
    secret: process.env.SESSION_KEY,
    saveUninitialized:true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false 
}));

const dao = new PortalDAO();

app.post("/login", (req, res) => {
    try {
        dao.getUser(req.body.username, async (error, user) => {
            if(error) {
               return res.status(500).send("An error occurred");
            }
            if(user) {
                const loginResponse = await bcrypt.compare(req.body.password, user.password)
                console.log(loginResponse);
                if(loginResponse == false) {
                    return res.status(401).send("Invalid Username or Password");
                }
                let session = req.session
                session.id = user.id;
                console.log(req)
                return res.status(200).send("Authenticated");
            }
            return res.status(401).send("Invalid Username or Password");
        })
    } catch(error) {
        
    }

})

app.listen(port, async () => {
    console.log("Portal Backend is up on port: " + port);
})