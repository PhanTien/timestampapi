var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/route');
routes(app);

var api = require('./api/controllers/timestamp.js');
api(app);

app.listen(port, function(){
	console.log("api server listening at "+port);
});
