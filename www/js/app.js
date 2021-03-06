var IP = '192.168.1.8';
var PORT = '8080';
var SITE = 'http://' + IP + ':' + PORT;
var MESSAGE_SPACE = '___';

angular.module('chat', ['ionic', 'chat.controllers', 'chat.chatController',
      'chat.messageController', 'chat.settingController', 'chat.routes',
      'chat.services', 'chat.dateService', 'chat.messageService', 'chat.settingService', 'chat.chatService',
      'chat.directives', 'monospaced.elastic'
    ])
    .config(function($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers
          .common['X-Requested-With'];
    })

    .run(function ($ionicPlatform, $http, messageService, dateService) {
      var url = 'http://' + IP + ':' + PORT + '/chat/queryChat.json';
      if (ionic.Platform.isAndroid()) {
        url = "/android_asset/www/";
      }

      $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    });