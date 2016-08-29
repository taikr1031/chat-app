angular.module('chat.settingController', [])
    .config(function($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers
          .common['X-Requested-With'];
    })
    //.run(function ($scope, $timeout, settingService) {
    //  var data = settingService.getAllUser();
    //  $timeout(function() {
    //    $scope.friends = data;
    //  }, 0);
    //})

    .controller('settingCtrl', function ($rootScope, $scope, $state, $timeout, settingService) {
      //$scope.friends = function () {
        $scope.friends = settingService.getAllUser();
      //};

      $scope.loginChat = function (name, password) {
        settingService.loginChat(name, password, setOwnInfoFn);
      };

      var setOwnInfoFn = function(user) {
        $rootScope.ownId = user.id;
        $rootScope.ownName = user.name;
        $rootScope.password = user.password;
        $state.go('tab.chat', {"ownId": user.id, "ownName": user.name});
      }

      $scope.getItemHeight = function(item, index) {
        //使索引项平均都有10px高，例如
        return (index % 2) === 0 ? 50 : 50;
      };
    });