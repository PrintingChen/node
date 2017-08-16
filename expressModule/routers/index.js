module.exports = function(app){
    app.get('/', function(request, response){
        response.send('index');
    });
    app.get('/index', function(request, response){
        response.send('index');
    });
    app.get('/test', function(request, response){
        response.send('test');
    });
    app.get('/page', function(request, response){
        response.send('page');
    });
};
