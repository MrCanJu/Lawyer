app.controller("detaCtrl",function($scope,$http,userServe,$stateParams){
	console.log($stateParams.id)
	userServe.details({
		id : $stateParams.id,
		user_id :1
	},function(data){
		console.log(data)
		$scope.data=data.data.RetValue;
		$scope.cont=$scope.data.content
	},function(){
		console.log('err')
	})
})