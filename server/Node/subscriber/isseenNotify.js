const bodyParser = require('body-parser')
const subscriber = require("../models/subscriber");
const express = require('express')
const app = express();

var isseen = (req,res)=> {
    let test = async function(){
        try{
            await subscriber.isseenNotification()
            res.status(200).send("0")
        }catch{
            res.status(400).send("error!")
        }
    }
    test()
}

module.exports = {isseen}