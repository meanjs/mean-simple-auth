'use strict';

// Define the main angular application module name
var mainApplicationModuleName = 'mean';

// Define the main angular application module 
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute']);

//Configure application hashbang routing
mainApplicationModule.config(['$locationProvider',
   function($locationProvider) {
       $locationProvider.hashPrefix('!');
   }
]);

angular.element(document).ready(function() {
	//Fixing facebook bug with redirect
	if (window.location.hash === '#_=_') window.location.hash = '#!';

   // Init the AngularJS application
   angular.bootstrap(document, [mainApplicationModuleName]);
});