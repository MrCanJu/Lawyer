app.factory("knowledgeList",function(){
	return {
		toggleBtn:function(serch,icon,btn,content){

			var ng_serch=angular.element(document.querySelector(serch)),
				ng_icon=angular.element(document.querySelector(icon)),
				ng_btn=angular.element(document.querySelector(btn)),
				ng_content=angular.element(document.querySelector(content));
			ng_serch.on("focus",function(){
				ng_serch.css({"width":"60%"});
				ng_btn.css({"display":"block"});
				ng_icon.css({"right":"35%"});
				ng_content.css({"display":"none"});
			})
			ng_btn.on("tap",function(){
				ng_btn.css({"display":"none"});
				ng_serch.css({"width":"80%"});
				ng_icon.css({"right":"15%"});
				ng_content.css({"display":"block"});
			})
		}
	}
})