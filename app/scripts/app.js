'use strict';

/**
 * @ngdoc overview
 * @name teamTodoApp
 * @description
 * # teamTodoApp
 *
 * Main module of the application.
 */
angular
  .module('teamTodoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'teamTodoApp.controllers',
    'teamTodoApp.services',
    'teamTodoApp.directives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
