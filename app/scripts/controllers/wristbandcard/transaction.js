'use strict';
angular.module('aircashApp')
  .controller('TransactionCtrl', ['$scope', '$http', '$routeParams', '$location',
    function ($scope, $http, $routeParams, $location) {
    	$scope["pageGroup"] = "wristbandcard";
    	$scope["page"] = "transaction";
    }
])
