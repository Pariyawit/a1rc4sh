'use strict';

angular.module('aircashApp')
  .controller('RegisterCtrl', ['$scope', '$http', '$location',
    function ($scope, $http, $location) {

      $scope.go = function(path){
        $location.path(path);
      }
    }
  ]);
