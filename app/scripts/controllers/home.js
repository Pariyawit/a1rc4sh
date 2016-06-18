'use strict';

angular.module('aircashApp')
  .controller('HomeCtrl', ['$scope', '$http', '$location',
    function ($scope, $http, $location) {

      $scope.go = function(path){
        $location.path(path);
      }
    }
  ]);
