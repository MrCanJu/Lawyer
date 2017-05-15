app.controller("detailCtrl",function($scope,$http,userServe,$timeout,$q,$ionicPopup){
	var deferred=$q.defer(),
		promise=deferred.promise;
	userServe.ke({
		user_id :1
	},function(data){
		$scope.data=data.data.RetValue
		$timeout(function(){deferred.resolve()},100);

	},function(){
		console.log(err)
	})

	promise.then(function(){
		var list=document.querySelectorAll(".detail-nav-bar b"),
			dataId=list[0].getAttribute("data-id")
			add(dataId)
			list[0].className='orange'

	})
	function add(id){
		var list=document.querySelectorAll(".detail-nav-bar b");
		userServe.list({
		user_id :1,
		category_id : id,
		pagesize :20,
		pageindex:5
		},function(data){
		if(data.data.RetValue == null){
			$scope.list=''
			var alertPopup = $ionicPopup.alert({
			    title: '提示',
			    template: data.data.description
			});                 
			 alertPopup.then(function(res) {
			    // console.log('Thank you for not eating my delicious ice cream cone');
			 });
		}else{
			$scope.list=data.data.RetValue
			
		}
		},function(){
			console.log(err)
		})
	}
	$scope.orange=function(id,index){
	var list=document.querySelectorAll(".detail-nav-bar b");
	for(var i=0;i<list.length;i++){		
		list[i].className=''
	}
		list[index].className="orange";
		add(id)
	}

})

