
/*
 * GET test page.
 */

exports.test = function(req, res){
  var myCurDate = new Date().toLocaleString();
  //var myReqDate = 'Diskette';
  res.render('test', { title: 'Test' , currentDate: myCurDate});
};

exports.testRoleForm = function(req, res){
  res.render('testroleform', { title: 'Test Role Form',
			   name: 'test_name' });
};

exports.testForm = function(req, res){
  res.render('testform', { title: 'Test Form',
		 	   id: 'test id',
			   context: 'door',
			   authString: 'l3tm3in123' });
};
