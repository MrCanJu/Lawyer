angular.module( "myApp").directive("myFooter",function(){
	return{
		scope : {
			// async : "="
		},
		templateUrl : "./components/footer/footer.html",
		restrict : "E",
		replace : true,
		controller : function( $scope ){
			//$scope.async=true
		}
	}
})