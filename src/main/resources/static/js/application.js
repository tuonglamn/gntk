define(['angular','services/module','controllers/module'], function (angular) { 
	var app = angular.module('angular-amd', ['angular-amd-services','angular-amd-controllers']); 
	app.bootstrap = function () { 
		angular.bootstrap(document, ['angular-amd']); 
	}; 
	return app; 
});