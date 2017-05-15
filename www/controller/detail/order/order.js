app.controller("orderCtrl",function($scope,$http,userServe,$stateParams){
	userServe.order({
		user_id :userServe.gitUserid().id,    
		pageSize :20,
		pageIndex : 1,      
	},function(data){
		$scope.data=data.data.RetValue
	},function(){
		console.log("err")
	})

})