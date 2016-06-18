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
        templateUrl: 'views/home.html',
        controller: 'homeCtrl',
        controllerAs: 'home'
      }).when('/login', {
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
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      }).when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      }).when('/wristbandcard', {
        templateUrl: 'views/wristbandcard.html',
        controller: 'WristbandCardCtrl',
        controllerAs: 'wristbandcard'
      }).when('/wristbandcard/reload', {
        templateUrl: 'views/reload.html',
        controller: 'ReloadCtrl',
        controllerAs: 'reload'
      }).when('/wristbandcard/transaction', {
        templateUrl: 'views/transaction.html',
        controller: 'TransactionCtrl',
        controllerAs: 'transaction'
      }).when('/wristbandcard/history', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl',
        controllerAs: 'history'
      }).when('/wristbandcard/faq', {
        templateUrl: 'views/faq.html',
        controller: 'FaqCtrl',
        controllerAs: 'faq'
      }).when('/wristbandcard/report', {
        templateUrl: 'views/report.html',
        controller: 'ReportCtrl',
        controllerAs: 'report'
      }).when('/wristbandcard/transaction', {
        templateUrl: 'views/transaction.html',
        controller: 'TransactionCtrl',
        controllerAs: 'transaction'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
