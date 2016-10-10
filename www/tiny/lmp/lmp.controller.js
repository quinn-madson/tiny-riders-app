(function() {
    'use strict';
    angular
        .module('tiny')
        .controller('lmpController', lmpController);
    lmpController.$inject = ['$scope', '$http', 'googleDriveService'];
    /* @ngInject */
    function lmpController($scope, $http, googleDriveService) {

        googleDriveService.getData('LMP').then(function(results) {
            $scope.chartPie = {
                size: {
                    height: 600
                },
                options: {
                    chart: {
                        type: 'bar',
                        // marginTop: '10px'
                    },
                    colors: ['#eb2d27', '#eb2d27'],
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
                    text: 'LMP'
                },
                loading: false
            };
        });
    }
})();
