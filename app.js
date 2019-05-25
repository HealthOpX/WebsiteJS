var express = require('express')
  , http = require('http')
  , path = require('path')
  , mysql = require('mysql');

var app = express();
var publicDir = require('path').join(__dirname,'/public');

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static('public'));

//Code to return defult main page!
app.get('/', function (req, res) 
{
   res.render("index.html" );
})
//Code to return local page!
app.get('/local.html', function (req, res) 
{
  res.render("local.html" );
})
//Code to return contact page!
app.get('/contact.html', function (req, res) 
{
  res.render("contact.html" );
})
//Code to return signin page!
app.get('/signin.html', function (req, res) 
{
  res.render("signin.html" );
})
//Code to return regestration form page!
app.get('/regform.html', function (req, res) 
{
  res.render("regform.html" );
})
//Code to return patient page!
app.get('/patient.html', function (req, res) 
{
  res.render("patient.html" );
})
//Code to return patient profile page!
app.get('/patient-profile.html', function (req, res) 
{
  res.render("patient-profile.html" );
})
//Code to return filbox page!
app.get('/fillbox.html', function (req, res) 
{
  res.render("fillbox.html" );
})
//Code to return confirmation page!
app.get('/confirmation.html', function (req, res) 
{
  res.render("confirmation.html" );
})
//Code to return index page!
app.get('/index.html', function (req, res) 
{
  res.render("index.html" );
})

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port + '/');
});