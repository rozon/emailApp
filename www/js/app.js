// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.inboxlist', {
    url: '/inboxlist',
    views: {
      'menuContent': {
        templateUrl: 'templates/inboxlist.html',
        controller: 'InboxListCtrl'
      }
    }
  })

  .state('app.inbox', {
    url: '/inboxlist/:inboxId',
    views: {
      'menuContent': {
        templateUrl: 'templates/inbox.html',
        controller: 'InboxCtrl'
      }
    }
  })

  .state('app.outboxlist', {
      url: '/outboxlist',
      views: {
        'menuContent': {
          templateUrl: 'templates/outboxlist.html',
          controller: 'OutboxListCtrl'
        }
      }
    })

  .state('app.outbox', {
      url: '/outboxlist/:outboxId',
      views: {
        'menuContent': {
          templateUrl: 'templates/outbox.html',
          controller: 'OutboxCtrl'
        }
      }
    })
    .state('app.spamlist', {
      url: '/spamlist',
      views: {
        'menuContent': {
          templateUrl: 'templates/spamlist.html',
          controller: 'SpamListCtrl'
        }
      }
    })

  .state('app.spam', {
    url: '/spamlist/:spamId',
    views: {
      'menuContent': {
        templateUrl: 'templates/spam.html',
        controller: 'SpamCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/spamlist');
});
