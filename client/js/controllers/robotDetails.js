app.controller("robotDetailsController", 
  ["$scope", "robotFactory", "$routeParams", "$location", 
  function($scope, robotFactory, $routeParams, $location){
  console.log("in robotDetailsController.. now serving robot #", $routeParams.id)

  //i need the info for one robot:
  function getRobot(){
    robotFactory.show($routeParams.id, function(response){
      console.log("response for show robot:", response)
      $scope.robot = response.data
    })
  }
  getRobot();

  $scope.update = function(robot){
    console.log("in edit details update function", robot);
    robotFactory.update(robot, function(response){
      console.log("response for update robot:", response)
      $location.path('/')
    })
  }

  $scope.review = function(review){
    $scope.newReview = {};
    console.log("in review method", review);
    robotFactory.review(review, $routeParams.id, function(response){
      console.log('server says!', response);
      getRobot();
    })
  }

}])