module.exports = function(app){
	app.get('/login', function(req, res){
		res.render('login');
	});

	app.post('/login', function(req, res){
		var User = global.dbHelper.getModel('user');
		var data = req.body; //请求的数据
		var wherestr = {userName: data.uname, pwd: data.upwd}
		User.find(wherestr, function(err, res1){
			if (err) {
				console.log('err:', err)
			}else{
				console.log('find success:', res1)
				if (res1.length > 0) {
					res.send({data: res1,status: 1});
				}else{
					res.send({data: res1, status: 0});
				}
			}
		});
	});
}