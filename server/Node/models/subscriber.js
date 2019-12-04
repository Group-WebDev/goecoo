const mongoose = require("mongoose");

var Schema = new mongoose.Schema({
    firstname: {type:String},
    lastname:{type:String},
    middlename:{type:String},
    email: {type: String, unique:true},
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
     return await this.find()
 }
 
 Schema.statics.getByUsername = async function(email) {
    return await this.findOne({"email" : email});
 }

 Schema.statics.notification = async function(){
   var count =  await this.countDocuments({"seen":false})
   console.log("count",count)
   return count;
 }

 module.exports = mongoose.model('subscriber', Schema);