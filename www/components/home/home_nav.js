angular.module( "myApp").directive("myNav",function(){
	return{
		templateUrl : "./components/home/home_nav.html",
		restrict : "E",
		replace : true,
		controller : function( $scope ){
			
		}
	}
})