angular.module("yariWeb", ["ngRoute"])
.config(function($routeProvider) {

	$routeProvider.when('/', {
		template:'<h5>This is the default route</h5>'
	})
	.when('/weddings', {
		template:'<h5>Weddings</h5>'
	})
	.when('/portraits', {
		template:'<h5>Portraits</h5>'
	})
	.when('/events', {
		template:'<h5>Events</h5>'
	})
	.when('/about', {
		templateUrl:'views/about.html'
	})
	.when('/travels', {
		template:'<h5>Travels</h5>'
	})
	.when('/clients', {
		templateUrl:'views/clients.html',
		controller:'ClientCtrl as cctrl'
	})
	.otherwise({redirectTo: '/'});
});

