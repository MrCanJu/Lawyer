app.factory("userServe",function(httpServer,$ionicPopup){
	return {
        //注册用户
    	Register : function( options,successCallback,errorCallback ){
    		httpServer.post( "Account/Register",{
    			LoginMobile : options.LoginMobile,
    			LoginCode : options.LoginCode, 
    			Pwd : options.Pwd
    		},function( res ){

    			successCallback(res);

    		},function(error){
    			errorCallback( error );
    		})
    	},
        gitUserid : function(){
            if(window.localStorage['user']){
                return JSON.parse(window.localStorage['user'])
            }
        },
        //登陆
    	Login : function( options,successCallback,errorCallback ){
    		httpServer.post( "Account/Login",{
    			LoginName : options.LoginName,
    			Pwd : options.Pwd
    		},function( res ){
    			if( res.data.RetValue ){

    				window.localStorage['user'] = JSON.stringify(res.data.RetValue);

                }else{
    				var alertPopup = $ionicPopup.alert({
				       title: '提示',
				       template: res.data.description
				     });                 
				     alertPopup.then(function(res) {
				     });
    			}
    			successCallback(res.data);
    		},function(error){
    			errorCallback( error );
    		})
    	},
        //获取知识点标题
        getKnowledgeCategory:function(options,successCallback,errorCallback){
            httpServer.get("Knowledge/GetKnowledgeCategory",options,function(data){
                successCallback(data.data)
            },function(err){
                errorCallback(err)
            })
        },
        //获取知识点菜单
        getKnowledgeCategoryList:function(options,successCallback,errorCallback){
             httpServer.get("Knowledge/GetKnowledgeCategoryList",options,function(data){
                successCallback(data.data)
            },function(err){
                errorCallback(err)
            })
        },
        //获取知识点列表
        getKnowledgeList:function(options,successCallback,errorCallback){
            httpServer.get("Knowledge/GetKnowledgeList",options,function(data){
                successCallback(data.data)
            },function(err){
                errorCallback(err)
            })
        },
        //获取知识点内容
        getKnowledgeMain:function(options,successCallback,errorCallback){
            httpServer.get("Knowledge/GetKnowledgeMain",options,function(data){
                successCallback(data.data)
            },function(err){
                errorCallback(err)
            })
        },
        //快讯
        KX:function( options,successCallback,errorCallback ){
            httpServer.get( "Account/GetMessageList",{
               id:options.id,
               pageSize:options.pageSize,
               pageIndex:options.pageIndex
            },function( res ){
                console.log(res)
                successCallback(res.data);
            },function(error){
                errorCallback( error );
            })
        },
        //评论
        PL:function( options,successCallback,errorCallback ){
            httpServer.get( "Comment/GetCommentList",{
               user_id:options.user_id,
               pagesize:options.pagesize,
               pageindex:options.pageindex
            },function( res ){
                successCallback(res.data);
            },function(error){
                errorCallback( error );
            })
        },
        //更换头像
        UpdateUserAvatar:function( options,successCallback,errorCallback ){
            httpServer.post( "Account/UpdateUserAvatar",{
               id:options.id,
               avatar:options.avatar
            },function( res ){
                successCallback(res.data);
            },function(error){
                errorCallback( error );
            })
        },
        //笔记
        Note:function( options,successCallback,errorCallback ){
            httpServer.get( "Note/GetNoteCategory",{
               id:options.id,
            },function( res ){
                successCallback(res.data);
            },function(error){
                errorCallback( error );
            })
        },
        /*Knowledge:function( options,successCallback,errorCallback ){
            httpServer.get( "Knowledge/GetKnowledgeCategory",{
               user_id:options.user_id
            },function( res ){
                successCallback(res.data);
            },function(error){
                errorCallback( error );
            })
        },*/
           
        //获取验证码

        ke : function( options,successCallback,errorCallback ){
            httpServer.get( "Course/GetCourseCategory",{
                user_id : options.user_id,
            },function( res ){
                successCallback(res);
            },function(error){
                errorCallback( error );
            })
        },
        list : function( options,successCallback,errorCallback ){
            httpServer.get( "Course/GetCourseList",{
                user_id :options.user_id,
                category_id : options.category_id,
                pagesize :options.pagesize,
                pageindex:options.pageindex,
            },function( res ){
                successCallback(res);
            },function(error){
                errorCallback( error );
            })
    	},
        details : function( options,successCallback,errorCallback ){
            httpServer.get( "Course/GetCourseMain",{
                 id : options.id,
                 user_id :options.user_id,             
            },function( res ){
                successCallback(res);
            },function(error){
                errorCallback( error );
            })
        },
        order : function( options,successCallback,errorCallback ){
            httpServer.get( "Order/GetOrderList",{
                 user_id :options.user_id,  
                 pageSize :options.pageSize,
                 pageIndex : options.pageIndex           
            },function( res ){
                successCallback(res);
            },function(error){
                errorCallback( error );
            })
        },
        Yanma : function( options,successCallback,errorCallback){
            httpServer.post( "Account/RegisterSMSSend",{
                mobile : options.mobile
            },function( res ){
                //console.log(res)
                if( res.data.RetValue ){

                   // window.localStorage['user'] = JSON.stringify(res.data.RetValue);

                }else{
                    var alertPopup = $ionicPopup.alert({
                       title: '提示',
                       template: res.data.description
                     });                 
                     alertPopup.then(function(res) {
                       //console.log('Thank you for not eating my delicious ice cream cone');
                     });
                }


                successCallback(res.data);
            },function(error){
                errorCallback( error );
            })
        },
        //找回密码
        ZhaoMima : function( options,successCallback,errorCallback){
            httpServer.post( "Account/RepassSmsSend",{
                mobile:options.mobile,
                new_password:options.new_password
            },function( res ){
                //console.log(res)
                if( res.data.RetValue ){

                   // window.localStorage['user'] = JSON.stringify(res.data.RetValue);

                }else{
                    var alertPopup = $ionicPopup.alert({
                       title: '提示',
                       template: res.data.description
                     });                 
                     alertPopup.then(function(res) {
                       //console.log('Thank you for not eating my delicious ice cream cone');
                     });
                }
                successCallback(res.data);
            },function(error){
                errorCallback( error );
            })
        },
        //修改密码
        XiuMima : function( options,successCallback,errorCallback){
            httpServer.post( "Account/RepassSmsSend",{
                mobile : options.mobile
            },function( res ){
                //console.log(res)
                if( res.data.RetValue ){

                   // window.localStorage['user'] = JSON.stringify(res.data.RetValue);

                }else{
                    var alertPopup = $ionicPopup.alert({
                       title: '提示',
                       template: res.data.description
                     });                 
                     alertPopup.then(function(res) {
                       //console.log('Thank you for not eating my delicious ice cream cone');
                     });
                }
                successCallback(res.data);
            },function(error){
                errorCallback( error );
            })
        },
        //保存信息
        BaocunXinxi:function( options,successCallback,errorCallback){
            httpServer.post( "Account/UpdateUserInfo",{
               id:options.id,
                nick_name:options.name,
                qq : options.qq,
                email : options.email,
                msn :options.msn
            },function( res ){
              
                if( res.data.RetValue ){
                    res.config.data['user_name']=JSON.parse(window.localStorage['user']).user_name;

                   window.localStorage['user'] = JSON.stringify(res.config.data);

                }else{
                    var alertPopup = $ionicPopup.alert({
                       title: '提示',
                       template: res.data.description
                     }); 
                }
                //successCallback(res.data);
            },function(error){
                errorCallback( error );
            })
        }


    }
})