'use strict';

/**
 * @ngdoc function
 * @name aircashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aircashApp
 */
angular.module('aircashApp')
  .controller('TopupCtrl', ['$location', '$routeParams', '$http',
    function ($location, $routeParams, $http) {
      var self = this;
      this.pay = function () {
        var req = {
          method: 'put',
          url: 'http://localhost:8080/topup/' + self.user.username,
          params: {
            type: 'creditcard',
            event: 'AngelHack',
            cash: self.cash
          }
        };
        $http(req).then(function(res){
          if(res.data.error) {
            alert(res.data.error);
          }
          else {
            $location.path('profile/' + self.user.username);
          }
        }, function(error) {
          console.log(error);
        });
      };

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
