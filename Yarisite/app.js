angular.module("yariWeb", [])
.controller('MainCtrl', [function () {
	self = this;

	self.user = { admin: true};

	//This variable will trigger ng-show to display the main container with the right content.
	self.mainContent="home";

	self.open = function(tab){
		self.mainContent=tab;

		//Test for debug.
		console.log(self.mainContent + " is the selected tab.\n");
	};

}])
.controller('ClientCtrl', [function() {
	self = this;
	self.showClientForm=false;		
	self.submit = function (){
		console.log(self.client);
	};
}]);

