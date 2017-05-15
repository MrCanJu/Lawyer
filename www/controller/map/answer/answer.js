app.controller("answerCtrl",function($scope,$stateParams,mapServe,$interval){
	var option = ['A','B','C','D'];
	$scope.data = [];
	$scope.id = $stateParams.id;
	$scope.tge = false;
	$scope.tj = false;
	$scope.next = 0;
	$scope.prev = 0;
	mapServe.titleCon({
		id : $stateParams.id,
		user_id :1
	},function(data){
		$scope.data = data.data.RetValue;
		$scope.time = $scope.data.exam_time;
		if ($scope.time!=0) {
			$interval(function(){
				$scope.time = $scope.time-1
			},60000);
		}
		mapServe.titleNext({
			id : $scope.data.id,
			user_id : 1,
			next : -1
		},function(data){
			$scope.prev = data.data.RetValue;
		})
	})

	$scope.time = $scope.data.exam_time;
	$scope.btn_tit = function(tit_id){
		var cons = document.querySelectorAll(".cons p");
		var user  = document.querySelector(".user_on");
		$scope.tge = false;
		$scope.tj = false;
		$scope.next = 0;
		$scope.prev = 0;
		mapServe.titleCon({
			id : tit_id,
			user_id :1
		},function(data){
			$scope.data = data.data.RetValue;
			mapServe.titleNext({
				id : $scope.data.id,
				user_id : 1,
				next : -1
			},function(data){
				$scope.prev = data.data.RetValue;
			})
		})
		for( var i=0;i<cons.length;i++){
			cons[i].className='';
		}
	}
	$scope.check = function(i){
		if ($scope.tge) {
			return false
		}
		var cons = document.querySelectorAll(".cons p");
		var user  = document.querySelector(".user_on");
		if ($scope.data.type_id==1) {
			for(var j=0;j<cons.length;j++){
				cons[j].className=''
			}
		};
		if (cons[i].className.split(" ").indexOf("on")!=-1) {
			cons[i].className = '';
		}else{
			cons[i].className = 'on';
		}
		
	}
	$scope.answer_btn = function(){
		var con = document.querySelectorAll(".cons p");
		var cons = document.querySelectorAll(".cons .on");
		var btn  = document.querySelectorAll(".map_btn_answer button");
		var user  = document.querySelector(".user_on");
		if ($scope.data.type_id==1 || $scope.data.type_id==2) {
			var ok_answer = $scope.data.answer
			if (cons.length==0) {
				alert("请作答")
				return false;
			};
			var answer = '';
			for( var i=0;i<con.length;i++){
				for(var j=0;j<ok_answer.length;j++){
					if (option[i] == ok_answer[j]) {
						con[i].className = 'off'
					}
				}
			}
			for( var i=0;i<cons.length;i++){
				answer += cons[i].innerText.substr(0,1)+",";
				if (option[i] == ok_answer) {
					cons[i].className = 'off'
				}
			}
			answer = answer.substr(0,answer.length-1)
		};
		if ($scope.data.type_id==3) {
			if (user.value=='') {
				alert("请作答")
				return false;
			};
			var answer = user.value;
			user.value = ''
		};
		$scope.tj = true ;
		mapServe.titleNext({
			id : $scope.data.id,
			user_id : 1,
			next : 1
		},function(data){
			$scope.next = data.data.RetValue;
			if ($scope.next==0) {
				$scope.tj = false;
				btn[1].innerText = '提交试卷';
			}
		})
		$scope.user_answer = answer;
		$scope.tge = true;
	}
})