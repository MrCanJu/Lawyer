app.factory("mapServe",function(httpServer,$ionicPopup){
	return {
        user: function(options,successCallback,errorCallback){
            //返回试卷题库一级类别  
            httpServer.get( "Question/GetQuestionCategory",{
                user_id : options.user_id
            },function( res ){
                successCallback(res);
            },function(error){
                errorCallback( error );
            })
        },
        parent: function(options,successCallback,errorCallback){  
            //根据父级类别ID和用户ID返回试卷题库子类
            httpServer.get( "Question/GetQuestionCategory",{
                parent_id : options.id,
                user_id : options.user_id
            },function( res ){
                successCallback(res);
            },function(error){
                errorCallback( error );
            })
        },
        category: function(options,successCallback,errorCallback){  
            //根据类别ID获取子类别列表（试题个数，已答题个数,如果是试卷返回试卷分数，排名，如果是题库返回排名）
            httpServer.get( "Question/GetQuestionCategoryList",{
                parent_id : options.id,
                user_id : options.user_id
            },function( res ){
                successCallback(res);
            },function(error){
                errorCallback( error );
            })
        },
        titleType: function(options,successCallback,errorCallback){  
            //根据类别ID，用户ID获取所有试题，包含类别ID，名称，是否试卷或类别
            httpServer.get( "Question/GetQuestionList",{
                category_id : options.id,
                user_id : options.user_id
            },function( res ){
                successCallback(res);
            },function(error){
                errorCallback( error );
            })
        },
        titleCon: function(options,successCallback,errorCallback){  
            //根据用户ID和题目ID得到题目详细信息
            httpServer.get( "Question/GetQuestionMain",{
                id : options.id,
                user_id : options.user_id
            },function( res ){
                successCallback(res);
            },function(error){
                errorCallback( error );
            })
        },
        titleNext: function(options,successCallback,errorCallback){  
            //根据当前题目ID和用户ID得到上一题和下一题的ID 
            httpServer.get( "Question/GetPrevandNextArticleId",{
                id : options.id,
                user_id : options.user_id,
                type : options.next     //1下一题 -1上一题
            },function( res ){
                successCallback(res);
            },function(error){
                errorCallback( error );
            })
        },
        answer_btn: function(options,successCallback,errorCallback){  
            //答案,题目id,用户id
            httpServer.post( "Question/SubmitAnswer",{
                id : options.id,
                user_id : options.user_id,
                answer : options.answer   
                //答案（多选中间用逗号分隔，判断（true,false）,问答题答案为0）
            },function( res ){
                successCallback(res);
            },function(error){
                errorCallback( error );
            })
        },
        comment: function(options,successCallback,errorCallback){  
            //返回该题的评论数
            httpServer.get( "Question/GetCommentCount",{
                id : options.id,
                user_id : options.user_id
            },function( res ){
                successCallback(res);
            },function(error){
                errorCallback( error );
            })
        }
    }
})