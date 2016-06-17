'use strict';

/**
 * @ngdoc function
 * @name aircashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aircashApp
 */
angular.module('aircashApp')
  .controller('ProfileCtrl', ['$http', '$routeParams', '$location',
    function ($http, $routeParams, $location) {
      var self = this;
      this.linkQr = function () {
        $location.path('qr/' + $routeParams.username);
      }
      this.linkTopUp = function () {
        $location.path('topup/' + $routeParams.username);
      }
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
      }
    }
  ])
