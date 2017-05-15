app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state("zijia",{
      url:"/zijia",
      templateUrl:"controller/zijia/zijia.html",
      controller : "zijiaCtrl"
    })
  .state("home",{
      url:"/home",
      templateUrl:"controller/home/home.html",
      controller : "homeCtrl"
    })
    .state("map",{
      url:"/map",
      templateUrl:"controller/map/map.html",
      controller : "mapCtrl"
      //template :" 这是商城页面"
    })
    .state("mapTitle",{
      url:"/mapTitle/:id",
      templateUrl:"controller/map/child/mapTitle.html",
      controller : "mapTitleCtrl"
      //template :" 题目列表"
    })
    .state("answer",{
      url:"/answer/:id",
      templateUrl:"controller/map/answer/answer.html",
      controller : "answerCtrl"
      //template :" 题目"
    })
    .state("mine",{
      url:"/mine",
      templateUrl:"controller/mine/mine.html",
      controller : "mineCtrl"
      //template :" 这是商城页面"
    })
    .state("detail",{
      url:"/detail",
      templateUrl:"controller/detail/detail.html",
      controller : "detailCtrl"
      //template :" 这是商城页面"
    })

    .state("deta",{
      url : "/detail.deta/:id/:category",
      templateUrl : "controller/detail/deta/deta.html",
      controller : "detaCtrl"
    })
    .state("order",{
      url : "/order",
      templateUrl : "controller/detail/order/order.html",
      controller : "orderCtrl"
    })
    //知识点菜单
    .state("lore",{
      url:"/lore/:parentId:title",
      templateUrl:"controller/zijia/lore/lore.html",
      controller:"loreCtrl"
    })
    //知识点列表
    .state("loreList",{
      url:"/loreList/:id:title",
      templateUrl:"controller/zijia/lore-list/lore-list.html",
      controller:"loreListCtrl"
    })
    //知识点内容
    .state("loreMain",{
      url:"/loreMain/:id",
      templateUrl:"controller/zijia/loreMain/loreMain.html",
      controller:"loreMainCtrl"
    })
    .state("setinfor",{
      url:"/setinfor",
      templateUrl:"controller/mine/setinfor/set_information.html",
      controller : "inforCtrl"                                        
      //template :" 这是商城页面"
    })
    .state("change",{
      url:"/change",
      templateUrl:"controller/mine/setinfor/change/change.html",
      controller : "changeCtrl"                                        
      //template :" 这是商城页面"
    })
    .state("news",{
      url:"/news",
      templateUrl:"controller/mine/fast_news/fast_news.html",
      controller : "fastCtrl"                                        
      //template :" 这是商城页面"
    })
    .state("thought",{
      url:"/thought",
      templateUrl:"controller/mine/fast_news/thought/thought.html",
      controller : "thought"                                        
      //template :" 这是商城页面"
    })
    .state("form",{
      url:"/form",
      templateUrl:"controller/form/form.html",
      controller : "formCtrl"
      //template :" 这是表单页面"
    })
    .state("back",{
      url:"/back",
      templateUrl:"controller/back/back.html",
      controller : "backCtrl"
      //template :" 这是首页背景页面"
    })
    .state("form_zhuce",{
      url:"/form_zhuce",
      templateUrl:"controller/form/zhuce/form_zhuce.html",
      controller : "form_zhuceCtrl"
      //template :" 这是首页背景页面"
    })
    .state("form_xiugai",{
      url:"/form_xiugai",
      templateUrl:"controller/form/xiugai/form_xiugai.html",
      controller : "form_xiugaiCtrl"
      //template :" 这是首页背景页面"
    })
    .state("PL",{
      url:"/PL",
      templateUrl:"controller/mine/PL/PL.html",
      controller : "PLCtrl"                                        
      //template :" 这是商城页面"
    })
    .state("Note",{
      url:"/Note",
      templateUrl:"controller/mine/Note/Note.html",
      controller : "NoteCtrl"                                        
      //template :" 这是商城页面"
    })
  $urlRouterProvider.otherwise('/back');

});