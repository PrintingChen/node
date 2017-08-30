module.exports = function(app){
	app.get('/login', function(req, res){
		res.render('login');
	});

	app.post('/login', function(req, res){
		var User = global.dbHelper.getModel('user');
		var data = req.body; //请求的数据
		var wherestr = {userName: data.uname}
		User.findOne(wherestr, function(err, doc){
			if (err) {
				console.log('err:', err)
			}else if(!doc){
				req.session.error = '用户名不存在！';
				res.send('nu');
				// res.send({data: doc,status: 0});
			}else{
				if (data.upwd != doc.pwd) {
					req.session.error = '密码错误！';
					// res.send({data: doc,status: 0});
					res.send('np');
				}else{
					req.session.user = doc.userName; //登陆成功后，保存用户名
					// res.send({data: doc, status: 1});
					res.send('success');
				}
			}
		});
	});
}