var config = require("../config.js");
var mongoose = require("mongoose");

var db;

var userSchema = mongoose.Schema({
	name: String,
	id: String,
	roles: [String]
}, {collection: "Users"});
var userModel = mongoose.model('User', userSchema);


var roleSchema = mongoose.Schema({
	name: String,
}, {collection: "Roles"});
var roleModel = mongoose.model('Role', roleSchema);

var contextSchema = mongoose.Schema({
	name: String,
	id: String,
	authString: String
}, {collection: "Contexts"});
var contextModel = mongoose.model('Context', contextSchema);


exports.User = userModel;
exports.Role = roleModel;
exports.Context = contextModel;

exports.connect = function(callback)
{
	mongoose.connect(config.URL);
	db = mongoose.connection;

	db.on('error', console.error.bind(console, 'Connection Error:'));
	db.once('open', function() {
		if(callback)
			callback(true);

		console.log("Connected to DB");
	});	
}
