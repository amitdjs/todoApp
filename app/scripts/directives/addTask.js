angular.module('teamTodoApp.directives', [])
  .directive('addTask', function (MainService) {
    return {
      restrict: 'E',
      template: '<div data-ng-repeat="task in newTasks"><b>Description</b> : <input type="text" data-ng-model="task.id"></div>' +
      '<button data-ng-click="addMore($event)">More</button>' +
      '<button data-ng-click="add()">More</button>',
      scope: false,
      link: function (scope, element, attr) {
        var i = 0;
        scope.newTasks = [{
          id: i
        }];
        scope.add = function () {
          var payLoad = [];
          angular.forEach(scope.newTasks, function(dt){
            payLoad.push({
              text: dt.id,
              value: false
            })
          });
          MainService.addTask(payLoad);
          scope.$parent.main.initialize();
        };
        scope.addMore = function (e) {
          e.stopPropagation();
          scope.newTasks.push({id: i++});
        }
      }
    }
  })
