(function() {
    'use strict';
    angular
        .module('tiny')
        .controller('clubController', clubController);
    clubController.$inject = ['$scope', '$http', 'googleDriveService', '$stateParams', 'utilitiesService'];
    /* @ngInject */
    function clubController($scope, $http, googleDriveService, $stateParams, utilitiesService) {

        // PROPERTIES
        $scope.className = $stateParams.className;
        $scope.hideChart = true;
        // BOOTSRTAP
        init();

        // FUNCTIONS
        function init() {
            showLoading();
        }

        function showLoading() {
            $scope.hideChart = true;
            utilitiesService.showLoading();
        }

        function hideLoading() {
            $scope.hideChart = false;
            utilitiesService.hideLoading();
        }
        googleDriveService.getData($stateParams.googleDocId, 'CLUB').then(function(results) {
            $scope.chartPie = {
                size: {
                    height: 600
                },
                options: {
                    chart: {
                        type: 'bar',
                        // marginTop: '10px'
                    },
                    colors: ['#28c948', '#28c948'],
                },
                series: [{
                    data: results,
                    name: 'Laps',
                    pointWidth: 30,
                    dataLabels: {
                        rotation: 0,
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.y}',
                        inside: true,
                        color: "#ffffff",
                        style: {
                            fontSize: "20px",
                            textShadow: '0 0 3px black'
                        },
                        x: 0,
                        y: 0,
                        align: "left"
                    }
                }],
                tooltip: {
                    formatter: function() {
                        return 'The value for <b>' + this.x +
                            '</b> is <b>' + this.y + '</b>';
                    }
                },
                title: {
                    text: $stateParams.className
                },
                loading: false
            };
            hideLoading();
        });
    }
})();
