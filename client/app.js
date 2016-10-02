var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'BooksController',
		templateUrl: 'views/rooms.html'
	})
	.when('/rooms', {
		controller:'BooksController',
		templateUrl: 'views/rooms.html'
	})
    .when('/bookRoom/:id',{
        controller:'BooksController',
        templateUrl:'views/book_details.html'
    })
    .when('/addRoom',{
       controller:'AdminController',
        templateUrl:'views/add_room.html'
    })
	.when('/Finalize/:id',{
		controller:'MyBookingController',
		templateUrl: 'views/myBookings.html'
	})
  	.otherwise({
		redirectTo: '/'
	});
});
