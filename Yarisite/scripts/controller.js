angular.module("yariWeb")
.controller('MainCtrl', [function () {
	self = this;
	self.user = { admin: true};

}])

.controller('CarouselCtrl', [function(){
  self = this;
  self.myInterval = 3000;
  self.home_slides = [
	    {image: '../img/home/1.jpg'},
   	    {image: '../img/home/2.jpg'},
            {image: '../img/home/3.jpg'},
   	    {image: '../img/home/4.jpg'}
  ];

  self.weddings_slides=[
 	    {image: '../img/weddings/3.jpg'},
   	    {image: '../img/weddings/2.jpg'},
            {image: '../img/weddings/1.jpg'},
 	    {image: '../img/weddings/4.jpg'},
   	    {image: '../img/weddings/5.jpg'},
 	    {image: '../img/weddings/7.jpg'},
   	    {image: '../img/weddings/8.jpg'},
            {image: '../img/weddings/9.jpg'},
 	    {image: '../img/weddings/10.jpg'},
   	    {image: '../img/weddings/11.jpg'},
            {image: '../img/weddings/12.jpg'},
 	    {image: '../img/weddings/13.jpg'},
   	    {image: '../img/weddings/14.jpg'},
            {image: '../img/weddings/15.jpg'},
   	    {image: '../img/weddings/16.jpg'},
 	    {image: '../img/weddings/17.jpg'},
   	    {image: '../img/weddings/18.jpg'},
            {image: '../img/weddings/19.jpg'},
 	    {image: '../img/weddings/20.jpg'}
  ];
  
  self.portraits_slides=[
 	    {image: '../img/portraits/1.jpg'},
   	    {image: '../img/portraits/2.jpg'},
            {image: '../img/portraits/3.jpg'},
 	    {image: '../img/portraits/4.jpg'},
   	    {image: '../img/portraits/5.jpg'},
 	    {image: '../img/portraits/7.jpg'},
   	    {image: '../img/portraits/8.jpg'},
            {image: '../img/portraits/9.jpg'},
 	    {image: '../img/portraits/10.jpg'},
   	    {image: '../img/portraits/11.jpg'},
            {image: '../img/portraits/12.jpg'},
 	    {image: '../img/portraits/13.jpg'},
   	    {image: '../img/portraits/14.jpg'},
            {image: '../img/portraits/15.jpg'},
   	    {image: '../img/portraits/16.jpg'},
 	    {image: '../img/portraits/17.jpg'}
  ];

  self.events_slides=[
 	    {image: '../img/events/1.jpg'},
   	    {image: '../img/events/2.jpg'},
            {image: '../img/events/3.jpg'},
 	    {image: '../img/events/4.jpg'},
   	    {image: '../img/events/5.jpg'},
 	    {image: '../img/events/7.jpg'},
   	    {image: '../img/events/8.jpg'},
            {image: '../img/events/9.jpg'}
  ];

  self.travels_slides=[
 	    {image: '../img/travels/1.jpg'},
   	    {image: '../img/travels/2.jpg'},
            {image: '../img/travels/3.jpg'},
 	    {image: '../img/travels/4.jpg'},
   	    {image: '../img/travels/5.jpg'}
  ];
}])

.controller('ClientCtrl', ["$http", function($http) {
	self = this;
	self.showClientForm=false;		
	self.user;
	self.userIsLoggedIn = false;
	self.submit = function (){
		console.log(self.client);
		
	};

	$http.get('/user').then(function (response){
		self.userIsLoggedIn = response.data;
	}, function(errResponse){
		console.error("Error fetching isLogged status");
	});
	
		
}]);

