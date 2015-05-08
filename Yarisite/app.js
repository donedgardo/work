angular.module("yariWeb", ["ngRoute"])
.controller('MainCtrl', [function () {
	self = this;
	self.user = { admin: true};

}])
.controller('ClientCtrl', [function() {
	self = this;
	self.showClientForm=false;		
	self.submit = function (){
		console.log(self.client);
	};
}])
.config(['$routeProvider',function($routeProvider) {

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
		template:'<h5>Portraits</h5>'
	})
	.when('/about', {
		template:'<h5>About</h5>'
	})
	.when('/clients', {
		template:'<h5>Clients</h5>'
	})
	.otherwise({redirectTo: '/'});
}]);

