app.controller("zijiaCtrl",function($scope,knowledgeList,userServe){
	knowledgeList.toggleBtn("#serch1","#icon_search1","#cancelBtn1","#content1")
	$scope.viewList=[];
	var user_id=userServe.gitUserid().id;
	//请求知识类别
	userServe.getKnowledgeCategory({//一级
		"user_id":user_id
	},function(data){
		$scope.viewList=data.RetValue;
		for (let i in data.RetValue){
			data.RetValue[i].menu=[];
			userServe.getKnowledgeCategory({//二级
				"user_id":user_id,
				"parent_id":data.RetValue[i].id
			},function(data){
				$scope.viewList[i].menu=data.RetValue;
				getMenuList($scope.viewList[i].menu)
			})
		}
	},function(err){
		console.log(err)
	})
	function getMenuList(menuList){
		for( let i in menuList){
			menuList[i].subMenu=[];
			userServe.getKnowledgeCategoryList({//三级
				"user_id":user_id,
				"parent_id":menuList[i].id
			},function(data){
				menuList[i].subMenu=data.RetValue;
			})
		}
	}
	
})

.directive("slideList",function(){
	return {
		scope:{
		},
		controller:function($scope,$ionicScrollDelegate){
			$scope.ionicScrollDelegate=$ionicScrollDelegate;
		},
		link:function(scope,ele,attr,parent){
				ele.on("click",function(){
				var ng_this=angular.element(this);
				if(ng_this.hasClass("showList")){
					ng_this.removeClass("showList").next().css({"display":"none"});
					ng_this.find("i").removeClass("ion-ios-arrow-down").addClass("ion-ios-arrow-right");
				}else{
					ng_this.addClass("showList").next().css({"display":"block"});
					ng_this.find("i").removeClass("ion-ios-arrow-right").addClass("ion-ios-arrow-down");
				}
				scope.ionicScrollDelegate.resize()
			})
		}
	}
})
