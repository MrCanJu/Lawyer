app.controller("changeCtrl",function($scope,userServe,$ionicPopup){
	$scope.mobile = "";
	$scope.new_password="";
	$scope.twonew_password="";
	$scope.xiugai =function(){

		if(this.new_password !=this.twonew_password ){
			var alertPopup = $ionicPopup.alert({
                       title: '提示',
                       template: "新密码不统一"
                     });

              return false
		} 

		userServe.XiuMima({
			mobile:this.mobile,
			new_password:this.new_password
		},function(res){
			console.log(res)
		},function(res){
			console.log(res)
		})
	}
})