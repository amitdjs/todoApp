'use strict';

/**
 * @ngdoc function
 * @name teamTodoApp.controller:MainCtrl
 * @description
 * #MainCtrl
 * Controller of the teamTodoApp
 */
angular.module('teamTodoApp.controllers', [])
  .controller('MainCtrl', function (MainService, $location) {
    var that = this;

    that.initialize = function () {
      MainService.getTasks().then(function (data){
        that.awesomeThings = data;
      });
      //take user type from url
      MainService.getUserType($location.search().user).then(function (data){
        that.userType = data;
      });
    }

    that.addNewTasks = false;

    that.addMore = function () {
      that.addNewTasks = !that.addNewTasks;
    };
    that.initialize();
  });
