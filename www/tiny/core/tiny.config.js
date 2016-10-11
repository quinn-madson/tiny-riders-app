(function() {
    'use strict';
    var tiny = angular.module('tiny');
    tiny.config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'tiny/core/tiny.menu.html',
                controller: 'tinyMenuController'
            })
            .state('app.schedule', {
                url: '/schedule',
                views: {
                    'menuContent': {
                        templateUrl: 'tiny/schedule/schedule.html',
                        controller: 'ScheduleController'
                    }
                }
            })
            .state('app.scheduleDetails', {
                url: '/scheduleDetails?event',
                views: {
                    'menuContent': {
                        templateUrl: 'tiny/schedule/scheduleDetails.html',
                        controller: 'ScheduleDetailsController'
                    }
                }
            })
            .state('app.posts', {
                url: '/posts',
                views: {
                    'menuContent': {
                        templateUrl: 'tiny/posts/postsList.html',
                        controller: 'PostsListController'
                    }
                }
            })
            .state('app.postDetails', {
                url: '/postDetails?post',
                views: {
                    'menuContent': {
                        templateUrl: 'tiny/posts/postDetails.html',
                        controller: 'PostDetailsController'
                    }
                }
            })
            .state('app.lmp', {
                url: '/lmp/:googleDocId',
                views: {
                    'menuContent': {
                        templateUrl: 'tiny/lmp/lmp.html',
                        controller: 'lmpController'
                    }
                }
            })
            .state('app.gt', {
                url: '/gt/:googleDocId',
                views: {
                    'menuContent': {
                        templateUrl: 'tiny/gt/gt.html',
                        controller: 'gtController'
                    }
                }
            })
            .state('app.club', {
                url: '/club/:googleDocId/:className',
                views: {
                    'menuContent': {
                        templateUrl: 'tiny/club/club.html',
                        controller: 'clubController'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/schedule');
    };
})();
