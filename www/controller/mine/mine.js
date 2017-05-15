app.controller("mineCtrl",function($scope,$state){
	$scope.asyncs=false;

	$scope.tuichu =function(){
		window.localStorage.removeItem("user")
		$state.go("form")
	}
})