require('dotenv').config();
const express = require("express");
const {PortalDAO} = require('./app/database/PortalDAO')
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const app = express();
const port = "3001";

app.use(bodyParser.json());

const dao = new PortalDAO();

app.post("/login", (req, res) => {
    try {
        dao.getUser(req.body.username, async (error, user) => {
            console.log(error);
            if(error) {
               return res.status(400).send("An error occurred");
            }
            if(user) {
                const loginResponse = await bcrypt.compare(req.body.password, user.password)
                if(loginResponse == false) {
                    return res.status(403).send("Invalid Username or Password")
                }
                
            }
        })
    } catch(error) {
        
    }

})

app.listen(port, async () => {
    console.log("Portal Backend is up on port: " + port);
})