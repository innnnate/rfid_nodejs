
/*
 * POST client API.
 */

exports.testForm = function(req, res){
  res.render('testform', { title: 'Test Form',
		 	   id: 'test id',
			   context: 'door',
			   authString: 'l3tm3in123' });
};

exports.clientAPI = function(req, res){

  res.json(req.body);

};

