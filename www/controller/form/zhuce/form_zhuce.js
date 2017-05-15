app.controller("form_zhuceCtrl",function($scope,userServe,$state){
	$scope.mobile ="";
	$scope.Pwd ="";
	$scope.twoPwd ="";
	$scope.yanma ="";
//发送送验证码
	$scope.yanzhengma = function(){		
		userServe.Yanma({
			mobile:this.mobile

		},function(res){
			console.log(res)

		},function(res){
			
			console.log(res)
			console.log("shi")
		})
	}

	//注册
	$scope.zhuce = function(){
		
		if(this.new_password != this.twonew_password ){
			var alertPopup = $ionicPopup.alert({
                       title: '提示',
                       template: "密码或手机不正确"
                     });

              return false
		}

		userServe.Register({
			LoginMobile : this.mobile,
			LoginCode : this.yanma, 
			Pwd : this.Pwd
		},function(res){
			//console.log(res)
			if(res.RetValue==true){

				$state.go("form")
			}
		},function(res){

			console.log(res)
		})
	}


})