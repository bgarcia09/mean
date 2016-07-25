app.controller('robotsController', ["$scope", 'robotFactory', function($scope, robotFactory){
  console.log("robotsController loaded!");

  function getRobots(){
    console.log('getting the robots...')
    robotFactory.index(function(response){
      console.log("response from robotFactory.index:", response);
      $scope.robots = response.data;
    })
  }
  getRobots();

  $scope.create = function(robot){
    console.log("$scope.create method fires!", robot)
    //invoke a factory method
    robotFactory.create(robot, function(response){
      console.log("success callback from robotFactory.create:", response);
      //we'll refresh the list of robots after server responds.
      getRobots();
    }, function(response){
      console.log("failure callback from robotFactory.create:", response);
    })
    $scope.newRobot = {};
  }

  $scope.delete = function(robot){
    console.log("$scope.delete method..", robot);
    robotFactory.delete(robot, function(response){
      console.log("success callback from robotFactory.delete:", response);
      getRobots();
    })
  }

}])