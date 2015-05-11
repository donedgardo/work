angular.module("yariWeb")
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
}]);

