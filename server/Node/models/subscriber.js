const mongoose = require("mongoose");

var Schema = new mongoose.Schema({
    firstname: {type:String},
    lastname:{type:String},
    middlename:{type:String},
    email: {type: String},
    address: {type: String},
    seen:{type:Boolean, default:false}

 });

 Schema.statics.addSubscriber = async function (subscriber){
    var Subscriber = new this(subscriber);
    var result =  await Subscriber.save(subscriber);
    console.log(result);
    return result;
 }
 
 Schema.statics.getLastSubscriber = async function() {
    return await this.findOne().sort({_id:-1}).limit(1);
 }

 Schema.statics.retrieveSubscriber = async function(){
     return await this.find().sort({_id : -1})
 }
 
 Schema.statics.getByUsername = async function(email) {
    return await this.findOne({"email" : email});
 }

 Schema.statics.notification = async function(){
   return await this.countDocuments({"seen":false})
 }

 Schema.statics.isseenNotification = async function(){
    return await this.updateMany({seen : false},{$set:{seen : true}})
 }


 module.exports = mongoose.model('subscriber', Schema);