app.controller("loreCtrl",function($scope,knowledgeList,$stateParams,userServe){
	knowledgeList.toggleBtn("#serch1","#icon_search1","#cancelBtn1","#content1")

	var parent_id=$stateParams.parentId,
		user_id=userServe.gitUserid().id;
	$scope.list=[];
	$scope.title=$stateParams.title;
	userServe.getKnowledgeCategoryList({
		"user_id":user_id,
		"parent_id":parent_id
	},function(data){
		if(data.RetValue){
			$scope.isInfo=true;
			$scope.list=data.RetValue;
		}else{
			$scope.isInfo=false;
			$scope.tsInfo="暂时没有内容";
		}
	})
})