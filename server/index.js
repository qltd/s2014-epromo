/** This is a placeholder for the actual server */

var express = require('express')
  , app = express();

var rootPath = require('path').normalize(__dirname + '/..')
  , staticPath = rootPath + '/client';

var api = require('./api');

app.use(require('prerender-node'));
app.use('/countdown', express.static(staticPath));

app.get('/countdown/*', function (req, res) {
  res.sendfile(staticPath + '/index.html');
});

app.get('/api/countdown', api.index);
app.get('/api/countdown/:countdown', api.show);

app.get('*', function (req, res) {
  res.send('Nothing to see here.');
});

app.listen(5000);
