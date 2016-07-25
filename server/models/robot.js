console.log("Robot Model loaded...");
var mongoose = require('mongoose');

var RobotSchema = new mongoose.Schema({
  name: String,
  power_source: String,
  reviews: [{type: mongoose.Schema.ObjectId, ref: "Review"}]
})

mongoose.model("Robot", RobotSchema);