
/*
 * GET contexts listing.
 */

var DB = require("../lib/db");

 
exports.list = function(req, res){


  DB.Context.find( {},'name authString' ,function (err, contextList) {
    if (err) {
	  console.log("err", err);
	}
	console.log(contextList);
	
    var response = {
	  status: "OK",
	  contexts: contextList
	};
	res.json( response );
	return;
  })
};