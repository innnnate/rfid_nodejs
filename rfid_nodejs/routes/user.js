
/*
 * GET users listing.
 */

var DB = require("../lib/db");

 
exports.list = function(req, res){

  var STATUS_SUCCESS = 'SUCCESS';

  DB.User.find( function (err, userList) {
    if (err) {
	  console.log("err", err);
	}
	console.log(userList);
	
    var response = {
	  statusCode: STATUS_SUCCESS,
	  userList: JSON.stringify(userList)
	};
	res.json(response);
	return;
  })
};