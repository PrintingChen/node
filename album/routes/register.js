module.exports = function(app){
	app.get('/register', function(req, res){
		res.render('register');
	});

	app.post('/register', function(req, res){
		console.log('register post')
		console.log(req.body)
		var insertData = req.body;
		// 插入数据库
		function insert(insertData){
			var User = global.dbHelper.getModel('user');
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
					res.send({status: 1})
				}
			});
		}
		insert(insertData);
	});
}