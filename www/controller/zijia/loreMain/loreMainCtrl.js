app.controller("loreMainCtrl",function($scope,$stateParams,userServe){
	var id=$stateParams.id,
		user_id=userServe.gitUserid().id;
	userServe.getKnowledgeMain({
		"user_id":user_id,
		"id":id
	},function(data){
		
		$scope.loreMain=data.RetValue;
	})
})