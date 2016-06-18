'use strict';
angular.module('aircashApp')
  .controller('FaqCtrl', ['$scope', '$http', '$routeParams', '$location',
    function ($scope, $http, $routeParams, $location) {
    	$scope["pageGroup"] = "wristbandcard";
    	$scope["page"] = "faq";
    }
])
