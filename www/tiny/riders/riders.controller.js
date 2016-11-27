(function() {
    'use strict';

    angular
        .module('tiny')
        .controller('RidersController', RidersController);

    RidersController.$inject = ['$scope', '$state', 'ridersService'];

    /* @ngInject */
    function RidersController($scope, $state, ridersService) {
        // METHODS
        $scope.setMode = setMode;
        $scope.nav = nav;
        // PROPERTIES
        $scope.events = [];
        activate();

        function activate() {
            ridersService.getRiders().then(function(response) {
                $scope.riders = $scope.Riders;
            });
        }

        function nav(ev) {
            ridersService.selectedItem = ev;
            $state.go('app.ridersDetails');
        }
    }
})();
