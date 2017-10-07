var express = require("express");
var path = require("path");
var session = require('express-session');
var app = express();
app.use(session({
    secret: 'codingdojorocks'
})); // string for encryption
var bodyParser = require('body-parser');!
app.use(bodyParser.urlencoded({
    extended: true
}));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function (req, res) {
    res.render("index",{session: req.session});
})

// post route for adding a user
app.post('/process', function (req, res) {
    var random = Math.floor(Math.random() * 100) + 1
    req.session.random = random;    
    console.log("POST DATA", req.body);    
    req.session.number = req.body.number;    
    console.log(req.session.number);
    // Then redirect to the root route
    res.redirect('/');
})

// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});