var express = require('express')
  , app = express();

var path = require('path')
  , staticPath = path.normalize(__dirname + '/../client');

app.use('/countdown', express.static(staticPath));
app.use(require('prerender-node'));

app.get('/countdown/*', function (req, res) {
  res.sendfile(staticPath + '/index.html');
});

app.get('*', function (req, res) {
  res.send('Nothing to see here.');
});

app.listen(5000);
