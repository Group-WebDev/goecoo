const mongoose = require("mongoose");

var Schema = new mongoose.Schema({
<<<<<<< HEAD
    username: {type:String,  unique:true},
    email: {type: String, require: true},
    address: {type: String, require: true},
    seen:{type: Boolean, default:false}

=======
    firstname: {type:String},
    lastname:{type:String},
    middlename:{type:String},
    email: {type: String, unique:true},
    address: {type: String}
>>>>>>> 15308685230d8442f3d34cb61c46d71630a3ecd7
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
   return await this.countDocument({seen: false})
 }

 module.exports = mongoose.model('subscriber', Schema);