 // https://github.com/alenaksu/mdPickers //

         var myApp = angular.module("myApp", ["ngMaterial", "ui.router"]); 
 
		myApp.config(function($stateProvider, $urlRouterProvider) {
	    
	    $urlRouterProvider.otherwise('/home');
	    
	    $stateProvider
	        
	        // HOME STATES AND NESTED VIEWS ========================================
	        .state('home', {
	            url: '/home',
	            templateUrl: 'home_user.html',
	            //controller: 'xyz_controller'
	        })
	        
	        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
	        .state('contato', {
	            url: '/contato',
	            templateUrl: 'contato.html'
	        })      
	        .state('sobre', {
	            url: '/sobre',
	            templateUrl: 'sobre.html'
	        });      	         

		});
		
		

		myApp.config(function($mdThemingProvider) {
		  $mdThemingProvider.theme('myTheme')
		    .primaryPalette('blue-grey')
		    .accentPalette('grey');
		});