var express = require("express");
var app = express();

port = parseInt(process.env.PORT, 10) || 3000

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(port);
