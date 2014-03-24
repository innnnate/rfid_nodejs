
/*
 * POST client API.
 */

var DB = require("../lib/db");




exports.clientAPI = function(req, res){

  var STATUS_BAD_DATA = 'ERRDATA';
  var STATUS_SUCCESS = 'SUCCESS';
  var STATUS_FAILED_ID = 'AUTH_FAILED';
  var STATUS_FAILED_CONTEXT = 'INVALID_CONTEXT';
  var STATUS_FAILED_AUTHSTRING = 'INVALID_AUTHSTRING';
  

  var jsontext = req.body;
  
  var response = {
            id: jsontext.id,  
            context: jsontext.context,  
            authString: jsontext.authString,  
            statusCode: STATUS_BAD_DATA,
			statusText: ""
		};

  if(jsontext.context != 'Door')
  {
	response.statusCode = STATUS_FAILED_CONTEXT;
	response.statusText = "I'm not sure where you are?!";
	res.json(response);
	return;
  }

  if(jsontext.authString != 'l3tm3in123')
  {
	response.statusCode = STATUS_FAILED_AUTHSTRING;
	response.statusText = "I don't recognize that string";
	res.json(response);
	return;
  }

  if(jsontext.id != 'Me')
  {
	response.statusCode = STATUS_FAILED_ID;
	response.statusText = "Who you are?!";
	res.json(response);
	return;
  }

  //Otherwise, success
  
  response.statusCode = STATUS_SUCCESS;
  response.statusText = "You are successful!!";
  res.json(response);
  
};



exports.dumpData = function(req ,res){
	
}


exports.getUserData = function(req, res) {
  DB.Users.find.pringjson();
}
