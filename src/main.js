import './style.scss';

const angular = require('angular');

var ngModule = angular.module('homework', [])
    .controller('CalculatorController', function ($scope) {

        $scope.result = function () {
            let num1 = parseInt($scope.a);
            let num2 = parseInt($scope.b);

            if ($scope.operator === '+') {
                return num1 + num2;
            }
            if ($scope.operator === '-') {
                return num1 - num2;
            }
            if ($scope.operator === '*') {
                return num1 * num2;
            }
            if ($scope.operator === '/') {
                return num1 / num2;
            }
        };
    });