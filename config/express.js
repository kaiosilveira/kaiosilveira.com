var express = require('express'),
    consign = require('consign'),
    bodyParser = require('body-parser'),
    app = express();

app.set('secret', 'letslaunchtherockethuh');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./public'));

consign({ cwd : 'api' })
.include('models')
.then('handlers')
.then('controllers')
.then('routes/auth.js')
.then('routes')
.into(app);

module.exports = app;
