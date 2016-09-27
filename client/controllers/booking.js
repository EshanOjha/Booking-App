var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('BooksController loaded...');
   $scope.select_occupancy = [1,2,3,4,5];
    
	$scope.getBooks= function(){
		$http.get('/api/roomcalandar').success(function(response){
			$scope.rooms = response;
		});
	}
    
   $scope.getRoomCalandar=function(){
       console.log('inside get Room calandar');
       var room_id=$routeParams.id;
       $http.get('/Finalize/'+room_id).success(function(response){
             console.log('response commes');
             console.log(response);
       });
       
   }
    
    
    $scope.submitForm = function(){
        var data=$scope.formAData;
        console.log($scope.formAData);
        var room_id=$routeParams.id;
        console.log(room_id);
        $http.post('/bookRoom/'+room_id, data).success(function(response){
			console.log("successful response come in controller");
            $location.path('/Finalize/'+room_id);
            
                        
     });
    }

    
    
	$scope.getBook = function(){
		var id = $routeParams.id;
		$http.get('/api/books/'+id).success(function(response){
			$scope.book = response;
		});
	}

}]);