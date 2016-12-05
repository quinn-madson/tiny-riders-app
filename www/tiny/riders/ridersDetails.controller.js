(function() {
    'use strict';

    angular
        .module('tiny')
        .controller('RidersDetailsController', RidersDetailsController);

    RidersDetailsController.$inject = ['$scope', 'ridersService'];

    /* @ngInject */
    function RidersDetailsController($scope, ridersService) {
        $scope.event = null;
        activate();

        function activate() {
            $scope.event = ridersService.selectedItem;
        }
    }
})();
