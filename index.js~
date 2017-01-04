var path = require('path');
var express = require('express');
var router = express.Router();
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static('./src'));

router.get('/', function(req, res) {
  res.redirect('app/view/index.html');
});

app.use('/', router);

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
