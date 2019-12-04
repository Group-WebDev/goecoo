const bodyParser = require('body-parser')
const subscriber = require("../models/subscriber");
const express = require('express')
const multer = require('multer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const createSubscriber = (req,res) =>{
    var data = req.body
    let test = async function (){
        try{
        var newsubs = {
            firstname: data.firstname,
            lastname: data.lastname,
            middlename : data.middlename,
            email : data.email,
            address : data.address
        }
        await subscriber.addSubscriber(newsubs)
        res.status(200).send("added successfully!")
    }catch{
        res.status(400).send("theres a problem in adding a new subscriber")
    }
}
test()
}

module.exports = {createSubscriber}