var express = require('express');
var router = express.Router();
var path = require('path');

var publicDir = "../views/public/"
var privateDir = require('path').join(__dirname,'views/private/');

//Code to return defult main page!
router.get('/', function (req, res) 
{
   res.render(publicDir + "index.html" );
});
//Code to return local page!
router.get('/local.html', function (req, res) 
{
  res.render("local.html" );
});
//Code to return contact page!
router.get('/contact.html', function (req, res) 
{
  res.render("contact.html" );
});
//Code to return signin page!
router.get('/signin.html', function (req, res) 
{
  var rows = 1;
  var message = '';
  res.render("signin.html", {rows: rows, message: message});
});
//Code to return regestration form page!
router.get('/regform.html', function (req, res) 
{
  res.render("regform.html" );
});
//Code to return patient page!
router.get('/patient.html', function (req, res) 
{
  res.render("patient.html" );
});
//Code to return patient profile page!
router.get('/patient-profile.html', function (req, res) 
{
  res.render("patient-profile.html" );
});
//Code to return filbox page!
router.get('/fillbox.html', function (req, res) 
{
  res.render("fillbox.html" );
});
//Code to return confirmation page!
router.get('/confirmation.html', function (req, res) 
{
  res.render("confirmation.html" );
});
//Code to return index page!
router.get('/index.html', function (req, res) 
{
  res.render("index.html" );
});
//Code to return register page!
router.get('/signup.html', function (req, res) 
{
  var message='';
  var rows = 0;
  console.log('message: ', message);
  console.log('rows: ', rows);
  res.render("signup.html", {message: message, rows: rows} );
});

module.exports = router;