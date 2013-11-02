
/*
 * GET test page.
 */

exports.test = function(req, res){
  var myCurDate = new Date().toLocaleString();
  //var myReqDate = 'Diskette';
  res.render('test', { title: 'Test' , currentDate: myCurDate});
};