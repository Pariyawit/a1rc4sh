'use strict';

/**
 * @ngdoc function
 * @name aircashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aircashApp
 */
angular.module('aircashApp')
  .controller('QrCtrl', ['$http', '$routeParams',
    function ($http, $routeParams) {
      var self = this;

      this.init = function () {
        var req = {
          method: 'get',
          url: 'http://localhost:8080/user/' + $routeParams.username
        };
        $http(req).then(function(res){
          if(res.data.error) {
            alert(res.data.error);
          }
          else {
            self.user = res.data.user;
          }
        }, function(error) {
          console.log(error);
        });
      };
    }
  ])
