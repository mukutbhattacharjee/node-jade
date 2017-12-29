var express = require('express')
var app = express();

var routes = require('./routes/routes');

app.set('view engine','jade');
app.use(express.static(__dirname+'/public'));

app.get('/',routes.home);
app.get('/:city',routes.city);

var port = process.env.npm_package_config_port;

app.listen(process.env.PORT || port,()=>{
	console.log("listening");
})
