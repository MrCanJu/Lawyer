app.controller("mapTitleCtrl",function($scope,$stateParams,mapServe){
	$scope.data = [];
	mapServe.titleType({
		id : $stateParams.id,
		user_id : 1
	},function(data){
		$scope.data =  data.data.RetValue
		console.log($scope.data,1)
		mapServe.category({
			id : data.data.RetValue.id,
			user_id : 1
		},function(data){
			$scope.json = data.data.RetValue
			if(!$scope.json){
				$scope.data.is_vol = 1
			}
		})
	})
})