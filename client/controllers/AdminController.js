myApp.controller('AdminController', ['$scope', '$http', '$location','$routeParams', function($scope, $http, $location, $routeParams){
	console.log('AdminController loaded...');
          $scope.addRoom = function(){
              console.log('request comes')
        var data=$scope.room;
        console.log(data);
          
         $http.post('/addRoom', data).success(function(response){
             console.log('Room successfully added by admin')
			$location.path('/');
     });
              
    }
  }]);
    
