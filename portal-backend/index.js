require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = "3000";

app.use(bodyParser.json());

app.post("/login", (req, res) => {
    try {
        
    } catch(error) {
        
    }

})

app.listen(port, async () => {
    console.log("Portal Backend is up on port: " + port);
})