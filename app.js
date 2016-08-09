'use strict'
var Koa = require('koa');
var path = require('path');
var wechat = require('./wechat/g')
var util = require('./libs/util')
var wechat_file = path.join(__dirname, './config/wechat.txt')
var config = {
	wechat : {
		appID : 'wx62d2f2afb7243081',
		appSecret : '1abc291f8e1ce55c9d98bad14412aff0',
		token : 'qinguangdongjihai',
		getAccessToken : function(){
			return util.readFileAysnc(wechat_file, 'utf8')
		},
		saveAccessToken : function(data){
			data = JSON.stringify(data);
			return util.writeFileAysnc(wechat_file,  data)
		}
	}
}
var app = new Koa()
app.use(wechat(config.wechat));
app.listen(1234)
console.log("listening: 1234")