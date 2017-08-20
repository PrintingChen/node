var mongoose = require('./db.js');

// 注册Schema
var Schema = mongoose.Schema;
/* Schema Types内置类型如下：
　　String
　　Number
　　Boolean | Bool
　　Array
　　Buffer
　　Date
　　ObjectId | Oid
　　Mixed*/
// 定义Schema（表结构）
var UserSchema = new Schema({
	userName: {type: String},
	pwd: {type: String},
	age: {type: Number},
	loginDate: {type: Date, default: Date.now},
	isDelete: {type: Boolean}
});

// 生成Model 
// model是由schema生成的模型，可以对数据库的操作
module.exports = mongoose.model('User', UserSchema);