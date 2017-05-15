var gulp = require("gulp"),
	connect = require("gulp-connect"),
	cssMinify = require("gulp-minify-css"),  //css压缩
	rename = require("gulp-rename"), //重命名
	Proxy = require("gulp-connect-proxy"),
	//合并文件
	concat =require("gulp-concat"),
	//压缩js
	mockServer = require("gulp-mock-server"),
	uglify =require("gulp-uglify"),
	rev =require("gulp-rev"),
	scss =require("gulp-less");
//解析css
	gulp.task("css",function(){
		gulp.src("./www/public/css/*.scss")
		.pipe(scss())
		.pipe( gulp.dest("./www/public/css/"))
		.pipe( cssMinify() )
		.pipe(rename("index.min.css"))
		.pipe( gulp.dest("./www/public/css/"))
	})
//压缩js
///*


	gulp.task("reload",function(){
		gulp.src([
			"./www/public/css/*.css",
			"./www/*.html",
			"./www/**/*.html",
			"./www/**/**/*.html",
			"./app/dist/*.js"
			])
		.pipe(connect.reload())
	})


	//开启服务器
	gulp.task("webserver",function(){
		connect.server({
			port : "2222",
			livereload : true,
			root: "./www/",
			middleware:function(connect,opt){
				opt.route = "server/data/";
				var proxy = new Proxy(opt);
				return [proxy]
			}
		})
	})

	//开启服务器
	gulp.task("mock",function(){
		gulp.src('.')
	    .pipe(mockServer({
	      allowCrossOrigin: true,
	      port: 8090
	    }));
	})

	

	gulp.watch([
	"./www/public/css/*.scss",
	"./www/public/less/*.scss",
	"./www/public/less/**/*.scss",
	"./www/public/less/**/**/*.scss",
	],["css","reload"])//关联文件

	gulp.watch([
	"./www/**/**/*.html",
	"./www/**/*.html",
	"./www/*.html"
	],["reload"])

	gulp.watch([
	"./www/*.js",
	"./www/**/*.js",
	"./www/**/**/*.js",
	],["reload"])//关联文件


	gulp.task("default",["css","webserver","mock"])