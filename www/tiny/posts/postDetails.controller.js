(function() {
    'use strict';

    angular
        .module('tiny')
        .controller('PostDetailsController', PostDetailsController);

    PostDetailsController.$inject = ['$scope', 'wordpressService'];

    /* @ngInject */
    function PostDetailsController($scope, wordpressService) {
        $scope.post = null;
        activate();

        function activate() {
            $scope.post = wordpressService.selectedItem;
        }
    }
})();
