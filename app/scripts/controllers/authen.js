'use strict';

/**
 * @ngdoc function
 * @name aircashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aircashApp
 */
angular.module('aircashApp')
  .controller('LoginCtrl', [ '$http', '$location',
    function ($http, $location) {
      var self = this;
      this.submit = function () {
        var req = {
          method: 'POST',
          url: 'http://localhost:8080/login',
          params: {
            username:self.username,
            password: self.password
          }
        };
        $http(req).then(function(res){
          if(res.data.error) {
            alert(res.data.error);
          }
          else {
            $location.path('/profile/' + res.data.user.username);
          }
        }, function(error) {
          console.log(error);
        });
      }
    }
  ])
  .controller('RegisterCtrl', ['$location',
    function ($location) {

    }
  ])
