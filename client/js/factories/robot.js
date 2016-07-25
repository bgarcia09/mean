app.factory('robotFactory', ["$http", function($http){
  console.log("robotFactory loaded!");
  return {
    index: function(success){
      console.log("in robotFactory.index");
      $http.get('/robots').then(success);
    },
    create: function(robot, success, orFailure){
      console.log("in robotFactory.create", robot);
      $http.post('/robots', robot).then(success, orFailure)
    },
    delete: function(robot, success){
      console.log("in robotFactory.delete", robot);
      $http.delete('/robots/'+robot._id).then(success);
    },
    show: function(id, success){
      $http.get('/robots/'+id).then(success);
    },
    update: function(robot, success){
      $http.put('/robots/'+robot._id, robot).then(success)
    },
    review: function(review, id, success){
      $http.post('/robots/'+id+"/review", review).then(success)
    }
  }
}])