module.exports = function(app){
	app.get('/register', function(req, res){
		res.render('register');
	});

	app.post('/register', function(req, res){
		var insertData = req.body;
		var User = global.dbHelper.getModel('user');
		User.findOne({userName: req.body.uname}, function(err, doc){
			if (err) {
				console.log('err:', err)
			}else if (!doc) {
				insert(insertData);
			}else{
				req.session.error = '已经存在此用户';
				res.send({status: 2});
			}
		});
		console.log('register post')
		console.log(req.body)
		// 插入数据库
		function insert(insertData){
			var user = new User({
				userName: insertData.uname,
				pwd: insertData.upwd,
				age: parseInt(Math.random()*10+30), 
				loginDate: new Date(),
				isDelete: true
			});
			user.save(function(err, res1){
				if (err) {
					console.log('save error:' +err)
					res.send({status: 0})
				}else{
					console.log('save success:'+res1)
					req.session.user = insertData.uname;
					res.send({status: 1})
				}
			});
		}
	});
}