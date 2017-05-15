app.controller("formCtrl",function($scope,userServe,$state){
	$scope.mobile="";
	$scope.Pwd="";
	$scope.tijiao = function(){
		userServe.Login({
			LoginName :this.mobile,
    		Pwd : this.Pwd
		},function(res){
			//console.log(res)
			if(res.result!=-1){
				$state.go("mine")
			}
			
		},function(){
			alert("失败")
		})
	}


	$scope.wangma = function(){
		//console.log(this.mobile)
		userServe.ZhaoMima({
			mobile:this.mobile
		},function(res){
			//console.log(res)
		},function(){
			alert("失败")
		})
	}
})