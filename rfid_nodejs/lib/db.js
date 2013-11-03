var config = require("../config.js");
var mongoose = require("mongoose");

var db;

var userSchema = mongoose.Schema({
	name: String,
	id: String,
	roles: [String]
}, {collection: "Users"});
var userModel = mongoose.model('User', userSchema);


exports.User = userModel;

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
