angular.module("yariWeb", ["ngRoute", 'ui.bootstrap'])
.config(function($routeProvider ) {

	$routeProvider.when('/', {
		templateUrl:'views/home.html',
	})
	.when('/weddings', {
		templateUrl:'views/weddings.html'
	})
	.when('/portraits', {
		templateUrl:'views/portraits.html'
	})
	.when('/events', {
		templateUrl:'views/events.html'
	})
	.when('/about', {
		templateUrl:'views/about.html'
	})
	.when('/travels', {
		templateUrl:'views/travels.html'
	})
	.when('/clients', {
		templateUrl:'views/clients.html',
		controller:'ClientCtrl as cctrl'
	})
	.when('/ad', {
		templateUrl:'views/ad.html'
	})
	.otherwise({redirectTo: '/'});
});

