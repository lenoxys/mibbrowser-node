
//
// GET Import Page
//

var bodystuff =
'';

var scripts = '';

exports.index = function(req, res){
  res.render('index', {
    title: 'NMS Alarms',
    script: scripts,
    body: bodystuff
    });
};
