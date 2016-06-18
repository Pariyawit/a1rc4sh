'use strict';
angular.module('aircashApp')
  .controller('ContactCtrl', ['$scope', '$http', '$routeParams', '$location',
    function ($scope, $http, $routeParams, $location) {
    	$scope["pageGroup"] = "profile";
    	$scope["page"] = "contact";
    }
])
