var app = angular.module("robotsApp", ['ngRoute'])
app.config(function($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl: "partials/dashboard.html",
      controller: "robotsController"
    })
    .when("/show/:id", {
      templateUrl: "partials/show.html",
      controller: "robotDetailsController"
    })
    .when("/edit/:id", {
      templateUrl: "partials/edit.html",
      controller: "robotDetailsController"
    })
    .otherwise({
      redirectTo: "/"
    })
})

