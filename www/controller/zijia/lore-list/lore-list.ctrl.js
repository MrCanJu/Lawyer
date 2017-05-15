app.controller("loreListCtrl",function($scope,$stateParams,userServe){
	var category_id=$stateParams.id,
		user_id=userServe.gitUserid().id;
	$scope.list=[];
	$scope.title=$stateParams.title;
	userServe.getKnowledgeList({
		"user_id":user_id,
		"category_id":category_id
	},function(data){
		if(data.RetValue.list.length){
			$scope.isInfo=true;
			$scope.list=data.RetValue.list;
		}else{
			$scope.isInfo=false;
			$scope.tsInfo="暂时没有内容";
		}
	})
})