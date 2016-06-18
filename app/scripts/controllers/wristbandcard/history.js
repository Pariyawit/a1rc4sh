'use strict';
angular.module('aircashApp')
  .controller('HistoryCtrl', ['$scope', '$http', '$routeParams', '$location',
    function ($scope, $http, $routeParams, $location) {
    	$scope["pageGroup"] = "wristbandcard";
    	$scope["page"] = "history";
    }
])
