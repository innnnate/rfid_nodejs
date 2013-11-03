
/*
 * GET users listing.
 */

var DB = require("../lib/db");

 
exports.list = function(req, res){


  DB.User.find( {},'name id roles' ,function (err, userList) {
    if (err) {
	  console.log("err", err);
	}
	console.log(userList);
	
    var response = {
	  status: "OK",
	  users: JSON.stringify(userList)
	};
	res.json( response );
	return;
  })
};