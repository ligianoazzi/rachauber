/*myApp.controller('homeUserController', '$mdpDatePicker','$mdpTimePicker', ['$scope', function($scope, $mdpDatePicker,$mdpTimePicker){*/

myApp.controller('homeUserController',  ['$scope', function($scope){

  $scope.enderecoSaida = 'Teotônio Vilela, 1024, Gravataí - RS';

  $scope.dataSaida = '2017-01-01';


  $scope.enderecoChegada = "Av. Sete Povos, 78, Canoas - RS"




/* $scope.currentDate = new Date();
  	this.showDatePicker = function(ev) {
    	$mdpDatePicker($scope.currentDate, {
        targetEvent: ev
      }).then(function(selectedDate) {
        $scope.currentDate = selectedDate;
      });;
    };
    
    this.filterDate = function(date) {
      return moment(date).date() % 2 == 0;
    };
    
    this.showTimePicker = function(ev) {
    	$mdpTimePicker($scope.currentTime, {
        targetEvent: ev
      }).then(function(selectedDate) {
        $scope.currentTime = selectedDate;
      });;
    }  
*/
   
}]);