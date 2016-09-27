
myApp.controller('MyBookingController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('MyBookingController loaded...');
    
   
       var room_id=$routeParams.id;
       $http.get('/Finalize/'+room_id).success(function(response){
             console.log('response commes');
             console.log(response);
           $scope.myRooms=response;
       });
       
   
    
}]);