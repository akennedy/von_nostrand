var myApp = angular.module('myApp', []);

myApp.directive('autocomplete', function($parse) {
    return function(scope, element, attrs) {
        var setSelection = $parse(attrs.selection).assign;
            scope.$watch(attrs.autocomplete, function(value) {
                element.autocomplete({
                    source: value,
                    select: function(event, ui) {
                        setSelection(scope, ui.item.code);
                        scope.$apply();
                    }
                });
            });
        };
});

function getIndications() {
  // Get Indications
  console.log('Get Indications');
}

function JuiceCtrl($scope) {
  $scope.medication = { code: 1, name: 'Foo' } 

  $scope.full_medication;
  
  $scope.medicationUrl = [{label: 'Foo', value: 'Foo', code: 1},{label: 'Bar', value: 'Bar', code: 2}];
  $scope.forms = [];
  $scope.strengths = [];
  $scope.$watch('medication.code', function() {
    if($scope.medication.code && $scope.medication.code > 0){
      // ajax ->
      //$scope.strengths = ["foo"] ->
      //  $scope.forms = ["foo"];
      getIndications();
      console.log('Change Drop Downs');
    }
    console.log($scope.medication.code);
  }); 
  //$scope.medicationUrl = "https://demopharmacist:Testph789@staging.eirenerx.com/autocompletes/medications.json";

}

function WhereAreYouCtrl($scope) {
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

}

// add to make js file unit testable in mocha
if(typeof window === "undefined") {
  module.exports = WhereAreYouCtrl;
}