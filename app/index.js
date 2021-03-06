var app = angular.module("4564", ["ng" ,"ngRoute", "chart.js", 'ngFileUpload'])

app.config(function($routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: 'templates/index.html',
      controller: "homeCtrl"
    }).
    when('/chart', {
      templateUrl: 'templates/chart.html',
      controller: "chartCtrl"
    }).
    when('/sample', {
      templateUrl: 'templates/sample.html',
      controller: "sampleCtrl"
    });

})

app.controller('homeCtrl', ['$scope', 'urlService', function($scope, urlService){

  $scope.audioUrl = urlService.audioUrl;

  $scope.$watch('audioUrl', function(){
    urlService.audioUrl = $scope.audioUrl;
  })
}]);

app.service('urlService', function(){

  var self = this;
  this.audioUrl = "https://www.havenondemand.com/sample-content/videos/hpnext.mp4";

  this.getAudioUrl = function(){
    return self.audioUrl
  }
})

app.service('uploadService', function(){
  var self = this;
  this.audioFile="";
})
