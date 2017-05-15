app.controller("homeCtrl",function($scope,$http,$ionicModal,$timeout){
	

    var swiper = new Swiper('.homeCont_nav', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier:1,
            slideShadows : true
        }
    })

    $ionicModal.fromTemplateUrl("xx",function(){
        scope : $scope
    }).then(function(model){
        $scope.model = model;
    })

     $scope.xiaLa = function(){ 
         $timeout(function(){
            $scope.$broadcast('scroll.refreshComplete');   //停止加载   
       },2000)
               
    }

    



   
})

