'use strict';
angular.module('aircashApp')
  .controller('ReloadCtrl', ['$scope', '$http', '$routeParams', '$location',
    function ($scope, $http, $routeParams, $location) {
    	$scope["pageGroup"] = "wristbandcard";
    	$scope["page"] = "reload";
    }
])
