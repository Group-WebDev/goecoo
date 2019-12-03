const bodyParser = require("body-parser");
const event = require("../models/event");
const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);


const update = (req, res) => {
  console.log(req.body, 'body')
  console.log("update: ", req.file )
//   req.file.forEach(function(item) {
//     console.log(item);
//     // move your file to destination
// })
  let test = async function() {
    try{
      await event.updateEvent(
        req.params.id,
        req.body.title,
        req.body.description,
        req.body.dateEvent,
        req.body.address,
        req.file.filename
      );
      let events = await event.retrieveEvents();
      res.status(200).send(events);
      console.log(events)
    } catch(err){
        res.send('error')
    }};
  test();
};

module.exports = { update };
