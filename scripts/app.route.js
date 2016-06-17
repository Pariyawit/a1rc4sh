'use strict';

/**
 * @ngdoc overview
 * @name aircashApp
 * @description
 * # aircashApp
 *
 * Main module of the application.
 */
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/qr/:username', {
        templateUrl: 'views/qr.html',
        controller: 'QrCtrl',
        controllerAs: 'qr'
      })
      .when('/topup/:username', {
        templateUrl: 'views/topup.html',
        controller: 'TopupCtrl',
        controllerAs: 'topup'
      })
      .when('/profile/:username', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
