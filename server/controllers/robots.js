console.log("robots controller loaded...");
var mongoose = require('mongoose');
var Robot = mongoose.model('Robot');
var Review = mongoose.model('Review');
module.exports = {
  index: function(req, res){
    console.log("listing all the robots in robots controller index");
    Robot.find({}, function(err, robots){
      // console.log(err, robots)
      if(err){
        // console.log(err)
        res.status(400).json(err);
      }
      res.json(robots);
    })
  },
  create: function(req, res){
    console.log("posting to /robots", req.body);
    Robot.create(req.body, function(err, robot){
      if(err){
        res.status(400).json(err);
      }
      res.json(robot);
    })
  },
  delete: function(req, res){
    console.log("deleting /robots/"+req.params.id);
    Robot.remove({_id: req.params.id}, function(err, robot){
      if(err){
        res.status(400).json(err);
      }
        res.json(robot);
    })
  },
  show: function(req, res){
    console.log("showing /robots/"+req.params.id);
    Robot.findOne({_id: req.params.id}).populate("reviews").exec(function(err, robot){
      if(err){
        res.status(400).json(err);
      }
      res.json(robot);
    })
  },
  update: function(req, res){
    console.log("updating /robots/"+req.params.id, req.body);
    Robot.findOneAndUpdate({_id: req.params.id}, req.body, function(err, robot){
      if(err){
        res.status(400).json(err);
      }
      res.json(robot);
    })
  },
  review: function(req, res){
    console.log("reviewing /robots/"+req.params.id, req.body);
    Robot.findOne({_id: req.params.id}, function(err, robot){
      if(err){
        console.log(err);
        res.status(400).json(err);
      }
      else{
        var review = new Review(req.body);
        review._robot = robot._id;
        robot.reviews.push(review);
        review.save(function(err, review){
          if(err){
            console.log(err);
            res.status(400).json(err);
          }
          else{

            robot.save(function(err, robot){
              if(err){
                res.status(400).json(err);
              }
              res.json(robot);
            })

          }
        })

      }


    })

  }
}