var express = require('express')
  , app = express();

var path = require('path')
  , staticPath = path.normalize(__dirname + '/../client');

app.use(express.static(staticPath));
app.use(require('prerender-node'));

app.get('*', function (req, res) {
  res.sendfile(staticPath + '/index.html');
});

app.listen(4000);
