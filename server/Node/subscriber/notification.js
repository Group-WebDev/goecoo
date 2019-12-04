const bodyParser = require('body-parser')
const subscriber = require("../models/subscriber");
const express = require('express')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const notification = (req, res) =>{
    let test = async function (){
        try{
            var countNotification = await subscriber.notification()
            console.log("countnotidsf, ", countNotification)
            res.json(countNotification)
        }catch{
            res.status(400).send("0")
        }
    }
    test()
}


module.exports = { notification }