/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var role = require('./routes/role');
var context = require('./routes/context');
var http = require('http');
var path = require('path');
var api = require('./routes/api');
var test = require('./routes/test');

function testDb()
{
	console.log("Testing Db...");
	DB.User.find(function(err, user){
		console.log("err", err);
                console.log(JSON.stringify(user));
	});
}

var DB = require("./lib/db");
DB.connect(testDb);


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  app.locals.pretty=true;
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/testform', api.testForm);
app.get('/test', test.test);

app.get('/api/users', user.list );
app.get('/api/roles', role.list );
app.get('/api/contexts', context.list );

app.post('/api/users', user.adduser );


app.post('/clientAPI', api.clientAPI);


http.createServer(app).listen(app.get('port'), function(){

  console.log('Express server listening on port ' + app.get('port'));
});
