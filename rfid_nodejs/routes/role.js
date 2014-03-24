
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

/*
exports.populateTable() = function() {

  var tableContent = '';
  
  $.getJSON('/roles', function( data ) {

    $.each(data, function() 
  
  }

}; //method populateTable
*/


/*
 * POST create roles.
 */
 
 exports.addrole = function(req,res) {
   
   var jsontext = req.body;
   
   var create_name = jsontext.name;
   var create_id = jsontext.id;
   
   var newRole = new DB.Role(
     { name: create_name,
	   id: create_id
	 }
   );
   
   newRole.save(function (err) {
     if(err) {
	   console.log("err", err)
	 }
	 else {
	   var response = {
	     status: "OK"
	   };
	   res.json( respons );
	   return;
	 }
   });
 }; // method addrole