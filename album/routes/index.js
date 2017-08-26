module.exports = function(app){
	require('./login')(app);
	require('./register')(app);
	require('./home')(app);
	require('./upload')(app);
	require('./logout')(app);
	
	app.get('/', function(req, res){
	res.render('login');
});
}