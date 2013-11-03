
/*
 * GET roles listing.
 */

var DB = require("../lib/db");

 
exports.list = function(req, res){


  DB.Role.find( {},'name' ,function (err, roleList) {
    if (err) {
	  console.log("err", err);
	}
	console.log(roleList);
	
    var response = {
	  status: "OK",
	  roles: roleList
	};
	res.json( response );
	return;
  })
};