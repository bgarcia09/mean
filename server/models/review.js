console.log("Review Model loaded...");
var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
  name: String,
  review: String,
  _robot: {type: mongoose.Schema.ObjectId, ref: "Robot"}
})

mongoose.model("Review", ReviewSchema);