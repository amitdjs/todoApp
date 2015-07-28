angular.module('teamTodoApp.services', [])
    .service('MainService', function ($q) {
    var allTasks = {
      task1: [{
        text: 'Do Something',
        value: true
      }, {
        text: 'Do Something1',
        value: false
      }, {
        text: 'Do Something2',
        value: true
      }, {
        text: 'Do Something3',
        value: false
      }, {
        text: 'Do Something4',
        value: false
      }],
      task2: [
        {
          text: 'Do Something',
          value: true
        }, {
          text: 'Do Something1',
          value: false
        }, {
          text: 'Do Something2',
          value: true
        }, {
          text: 'Do Something3',
          value: false
        }, {
          text: 'Do Something4',
          value: false
        }]
    };
    var users = {
      admin: {
        type: 'admin',
        readDisabled: false,
        addDisabled: false
      },
      mod: {
        type: 'mod',
        readDisabled: false,
        addDisabled: true
      },
      guest: {
        type: 'guest',
        readDisabled: true,
        addDisabled: true
      }
    };
    return {
      getTasks: function () {
        var deferred = $q.defer();
        deferred.resolve(allTasks);
        return deferred.promise;
      },
      getUserType: function (type) {
        var deferred = $q.defer();
        deferred.resolve(users[type] || users.guest);
        return deferred.promise;
      },
      addTask: function (task) {
        allTasks[allTasks.length] = task;
      }
    }
  });
