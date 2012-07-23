angular.module('components', []).

  directive('pane', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: function($scope, $element) {
        $scope.foo = "Where are you! ";
        $scope.mylocation = { country: 'USA', state: 'South Carolina', city: 'Charleston'}

        $scope.states = ['Georgia', 'South Carolina', 'New Jersey'];
        $scope.cities = ['Atlanta', 'Charleston', 'Moorestown'];
        $scope.change = function(){
          if($scope.mylocation.country === 'UK') {
            $scope.states = ['Scotland', 'England', 'Wales'];
            $scope.cities = ['London', 'York', 'Jersey'];
          } else {
            $scope.states = ['Georgia', 'South Carolina', 'New Jersey'];
            $scope.cities = ['Atlanta', 'Charleston', 'Moorestown'];
          }
        }
        $scope.stateChanged = function(){
          console.log('State Changed...');
          if($scope.mylocation.state === 'Scotland') {
            $scope.cities = ['Jersey'];
          } else if ($scope.mylocation.country === 'USA') {
            $scope.cities = ['Atlanta', 'Charleston', 'Moorestown'];
          } else {
            $scope.cities = ['London', 'York', 'Jersey'];
          }
        }
        $scope.cityChanged = function(){
          console.log('City Changed...')
        }
      },
      template:
        '<div ng-controller="WhereAreYouCtrl">' +
          '<h1>{{foo}}</h1>' +
          '<input type="text" placeholder="Enter Country Name" ng-model="mylocation.country" ng-change="change()"></input>' +
          '<input id="country" type="hidden" value="{{mylocation.country}}"></input>' +
          '<select ng-model="mylocation.state" ng-options="state for state in states" ng-change="stateChanged()">' +
            '<option value="">--- Choose State ---</option>' +
          '</select>' +
          '<select ng-model="mylocation.city" ng-options="city for city in cities" ng-change="cityChanged()">' +
            '<option value="">--- Choose City ---</option>' +
          '</select>' +
          '<br />' +
          '<h2>Results</h2>' +
          '{{mylocation.country}}' +
          '{{mylocation.state}}' +
          '{{mylocation.city}}' +
        '</div>',
      replace: true
    };
  }).