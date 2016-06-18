'use strict';
angular.module('aircashApp')
  .controller('ReportCtrl', ['$scope', '$http', '$routeParams', '$location',
    function ($scope, $http, $routeParams, $location) {
    	$scope["pageGroup"] = "wristbandcard";
    	$scope["page"] = "report";
    }
])
