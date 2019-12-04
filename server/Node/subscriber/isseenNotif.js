const bodyParser = require('body-parser')
const subscriber = require("../models/subscriber");
const express = require('express')
const app = express();

var isseen = function (){
    let test = async function(){
        try{
            await subscriber.isseenNotif
        }
    }
}