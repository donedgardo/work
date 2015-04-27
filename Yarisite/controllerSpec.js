describe('Controller: MainCtrl', function(){
	//Instantaniate a new version of my module before each test
	beforeEach(module('yariWeb'));

	var ctrl;

	//Before each unit test, instantaniate a new instance
	//of the controller
	beforeEach(inject(function($controller){
		ctrl = $controller('MainCtrl');
	}));


	it('should render home on mainContainer as default', function(){
		expect(ctrl.mainContent).toEqual('home');
	});


});
