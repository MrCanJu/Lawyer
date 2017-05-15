app.controller("mapCtrl",function($scope,$ionicSlideBoxDelegate,mapServe){
	$scope.data = [];
	$scope.question = [];
	mapServe.user({
		user_id : 1
	},function(data){
		$scope.data = data.data.RetValue;
		$ionicSlideBoxDelegate.update();                   
		(function getData(i){
			if (i<$scope.data.length) {
				var id = $scope.data[i].id;
				mapServe.parent({
					'id' : id,
					user_id : 1
				},function(data){
					$scope.data[i].data = data.data.RetValue;
					$scope.data[i].data[0].tge = true;
					$scope.getQuestion(0,i)
					getData(i+1)
				})                     
			}                                                    
		}(0))
	})
	$scope.getQuestion = function(i,j){
		var index = j?j:$(".slidingTabs ul .tab-active").index();
		var id = $scope.data[index].data[i].id;
		for(var j=0;j<$scope.data[index].data.length;j++){
			$scope.data[index].data[j].tge=false;
		}
		$scope.data[index].data[i].tge=true;
		mapServe.category({
			'id' : id,
			user_id : 1
		},function(data){
			$scope.data[index].json = data.data.RetValue;
		})
	}
})
