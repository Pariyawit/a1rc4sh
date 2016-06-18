'use strict';
angular.module('aircashApp')
  .controller('WristbandCardCtrl', ['$scope', '$http', '$routeParams', '$location',
    function ($scope, $http, $routeParams, $location) {
    	$scope["pageGroup"] = "wristbandcard";
    	$scope["page"] = "wristbandcard";
    }
])
