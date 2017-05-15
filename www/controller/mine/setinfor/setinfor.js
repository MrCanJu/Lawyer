app.controller("inforCtrl",function($scope,userServe){
	$scope.name=userServe.gitUserid().nick_name;
	$scope.qq=userServe.gitUserid().qq;
	$scope.email="";
	$scope.msn=userServe.gitUserid().msn;
	$scope.user_name=userServe.gitUserid().user_name;
	
$scope.baocun = function(){
	userServe.BaocunXinxi({
		id:userServe.gitUserid().id,
        name:this.name,
        qq : this.qq,
        email : this.qq+"@qq.com",
        msn :this.msn
	},function(res){
			
		},function(){
			alert("失败")
		})

}
	//console.log(userServe.gitUserid())
})