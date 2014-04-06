var DB = require("../lib/db");

/*
 * GET users listing.
 */
 
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


/*
 * POST create users.
 */

exports.adduser = function(req, res){

 var jsontext = req.body;
 
 
 var create_name = jsontext.name;
 var create_id = jsontext.id;
 var create_roles = jsontext.roles.split( new RegExp(",[ ]*"));
 
 var newUser = new DB.User(
   { name: create_name,
     id: create_id,
	 roles: create_roles
   }
 );
 newUser.save(function (err) {
   if(err) {
     console.log("err", err)
   }
   else {
     var response = {
	   status: "OK"
	 };
	 res.json( response );
	 return;
   }
 });
};


/*
 * PUT update users.
 */
 
 exports.updateuser = function(req, res){
   
//   var jsontext = req.body;   
   
//   var update_name = jsontext.name;
//   var update_id = jsontext.id;
//   var update_roles = jsontext.roles.split( new RegExp(",[ ]*"));
   
   //find correct record in database
   
   //if DB.User.findByID( jsontext.name )
   //make updates
   //save it//
   
 };
 
/*
 * DELETE delete users.
 */

 
 exports.deleteuser = function(req, res) {
   userToDelete = req.params.id;
   DB.User.remove( {_id: userToDelete} , function(err, result) {
     res.send((result === 1) ? { msg: '' } : { msg:'error: ' + err });
   }
   );
   console.log("Removed: ", userToDelete);
 }; //function deleteuser


