// var mongoose = require('mongoose');
// //链接数据库
// var DB_URL = 'mongodb://localhost:27017/book';
// /**
//  * 连接
//  */
// mongoose.connect(DB_URL);

// /**
//   * 连接成功
//   */
// mongoose.connection.on('connected', function () {    
//     console.log('Mongoose connection open to ' + DB_URL);  
// });    

// /**
//  * 连接异常
//  */
// mongoose.connection.on('error',function (err) {    
//     console.log('Mongoose connection error: ' + err);  
// });    
 
// /**
//  * 连接断开
//  */
// mongoose.connection.on('disconnected', function () {    
//     console.log('Mongoose connection disconnected');  
// });  

// // 注册Schema
// var Schema = mongoose.Schema;
// /* Schema Types内置类型如下：
// 　　String
// 　　Number
// 　　Boolean | Bool
// 　　Array
// 　　Buffer
// 　　Date
// 　　ObjectId | Oid
// 　　Mixed*/
// // 定义Schema（表结构）
// var UserSchema = new Schema({
// 	userName: {type: String},
// 	pwd: {type: String},
// 	age: {type: Number},
// 	loginDate: {type: Date, default: Date.now},
// 	isDelete: {type: Boolean}
// });

// // 生成Model 
// // model是由schema生成的模型，可以对数据库的操作
// var userModel = mongoose.model('User', UserSchema);

// // 插入数据
// function insert(){
// 	var user = new userModel({
// 		userName: 'Ryan',
// 		pwd: '456',
// 		age: 30,
// 		loginDate: new Date(),
// 		isDelete: true
// 	});

// 	user.save(function(err, res){
// 		if (err) {
// 			console.log('save error:' +err)
// 		}else{
// 			console.log('save success:'+res)
// 			/*
// 				插入成功返回插入的信息	
// 			 { 
// 				__v: 0,
// 				userName: 'Ryan',
// 				pwd: '456',
// 				age: 30,
// 				loginDate: 2017-08-20T12:19:42.851Z,
// 				isDelete: true,
// 				_id: 59997e5e23a37e0d403cb36b 
// 			}*/

// 		}
// 	});
// }
// // insert();

// // 更新数据
// function update(){
// 	var whereStr = {userName: 'Stay'};
// 	var updateStr = {pwd: '111111a'}

// 	userModel.update(whereStr, updateStr, function(err, res){
// 		if (err) {
// 			console.log('update error:', err)
// 		}else{
// 			console.log('update success:', res); 
// 			/*
// 				更新成功返回
// 				update success: { ok: 1, nModified: 0, n: 0 }
// 			*/
// 		}
// 	});
// }
// // update();
// //常用方法还有findByIdAndUpdate，这种比较有指定性，就是根据_id
// function findByIdAndUpdate(){
// 	var id = '599975ef1a284d1d04815103';
// 	var updateStr = {pwd: '111111a'};

// 	userModel.findByIdAndUpdate(id, updateStr, function(err, res){
// 		if (err) {
// 			console.log('findByIdAndUpdate error:', err)
// 		}else{
// 			console.log('findByIdAndUpdate success:', res)
// 			/*
// 				返回更新后的信息
// 				{ 
// 					_id: 599975ef1a284d1d04815103,
// 					userName: 'Stay',
// 					pwd: '1234567890',
// 					age: 18,
// 					loginDate: 2017-08-20T11:43:43.733Z,
// 					isDelete: true,
// 					__v: 0 
// 				}
// 			 */
// 		}
// 	});
// }
// // findByIdAndUpdate();

// // 删除数据
// function del(){
// 	var whereStr = {userName: 'Ryan'};

// 	userModel.remove(whereStr, function(err, res){
// 		if (err) {
// 			console.log('remove error:', err)
// 		}else{
// 			console.log('remove success:', res.result)
// 			// { ok: 1, n: 2 }
// 		}
// 	});
// }
// // del();

// // 查询数据 Model.find(conditions, [fields], [options], [callback])
// function find(){
// 	var wherestr = {userName: {$regex: /a/i}/*, isDelete: false*/};
// 	var opt = {pwd: 0}; //想要查询的指定字段(默认显示) 1->显示 0->不显示
// 	userModel.find(wherestr, opt, function(err, res){
// 		if (err) {
// 			console.log('find error:', err)
// 		}else{
// 			console.log('find success:', res)
// 			// 返回结果数组
// 		}
// 	});
// }
// find();

// // 数量查询 
// function count(){
// 	var wherestr = {};
// 	userModel.count(wherestr, function(err, res){
// 		if (err) {
// 			console.log('count error:', err)
// 		}else{
// 			console.log('count success:', res)
// 			// 返回结果数组
// 		}
// 	});
// }
// // count();

