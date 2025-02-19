const mongoose = require("mongoose");

var Schema = new mongoose.Schema({
    username: {type:String,  unique:true},
    email: {type: String, require: true},
    address: {type: String, require: true},
    seen:{type: Boolean, default:false}

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
 
 Schema.statics.getByUsername = async function(username) {
    return await this.findOne({"username" : username});
 }

 Schema.statics.notification = async function(){
   return await this.countDocument({seen: false})
 }

 module.exports = mongoose.model('subscriber', Schema);