(function() {
    'use strict';

    angular
        .module('tiny')
        .controller('PostsListController', PostsListController);

    PostsListController.$inject = ['$scope', '$state', 'wordpressService', 'utilitiesService'];

    /* @ngInject */
    function PostsListController($scope, $state, wordpressService, utilitiesService) {
        // METHODS
        $scope.nav = nav;
        // PROPERTIES
        $scope.posts = [];
        activate();

        function activate() {
            utilitiesService.showLoading();
            wordpressService.makeCall('get_posts/').then(function(response) {
                $scope.posts = response.posts;
                utilitiesService.hideLoading();
            });
        }

        function nav(ev) {
            wordpressService.selectedItem = ev;
            $state.go('app.postDetails');
        }
    }
})();
