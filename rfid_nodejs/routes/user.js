
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
	
    var newList = new Array(userList.length);

	for(var i = 0; i < userList.length; i++)
	 {
	 	newList[i] = {};
	 	newList[i].name = userList[i].name;
	 	newList[i].id = userList[i].id;
	 	newList[i]._id = userList[i]._id;
	  	newList[i].roles = userList[i].roles.join(", ");
	 }

    var response = {
	  status: "OK",
	  users: newList
	};
	res.json( response );
	return;
  })
};