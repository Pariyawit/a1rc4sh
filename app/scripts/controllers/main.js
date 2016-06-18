'use strict';

/**
 * @ngdoc function
 * @name aircashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aircashApp
 */
angular.module('aircashApp')
  .controller('MainCtrl', ['$scope', '$http', '$location',
    function ($scope, $http, $location) {
      // var req = {
      //   method: 'GET',
      //   url: 'http://localhost:8080/user'
      // };
      // $http(req).then(function(res){
      //   console.log(res);
      //   if(res.data.user) {
      //
      //   }
      //   else {
      //     $location.path('/login');
      //   }
      // }, function(error) {
      //   console.log(error);
      // });
      $scope.go = function(path){
        $location.path(path);
      }
    }
  ]);
