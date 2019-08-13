var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
var querystring = require('querystring');
var request = require('request');

// var path = require('path');

var pubDir = "public/";
var priDir = "private/";
// var priDir = "";

//Code to return defult main page!
router.get('/', function (req, res) 
{
  // console.log('Cookies: ', req.cookies);
  // console.log('*********************************')
  // console.log('Signed Cookies: ', req.signedCookies);
   res.render(pubDir + "home.html" );
});
//Code to return local page!
router.get('/local.html', function (req, res) 
{
  res.render(pubDir + "local.html" );
});
//Code to return contact page!
router.get('/contact.html', function (req, res) 
{
  res.render(pubDir + "contact.html" );
});
//Code to return signin page!
router.get('/signin.html', function (req, res) 
{
  var rows = 1;
  var message = '';
  res.render(pubDir + "signin.html", {rows: rows, message: message});
});
//Code to return regestration form page!
router.get('/regform.html', function (req, res) 
{
  res.render(pubDir + "regform.html" );
});
//Code to return patient page!
router.get('/patient.html', function (req, res) 
{
  console.log('Accessed the patient patient.html page!');
  console.log('req.query.code: ', req.query.code);

  // all the data needed for the post request to get the jwt
  var form = 
  {
    grant_type: 'authorization_code',
    client_id: '2l7p6u93r60avs9fko3aorm1s6',
    code: req.query.code,
    redirect_uri: 'https://www.healthopx.com/patient.html',
    client_secret: '1sk4btg41ce58tav4gblrj3dfcu920r5euduvit469rfaquppan1'
  };
  var formData = querystring.stringify(form);
  var contentLength = formData.length;

  request(
    {
      headers: 
      {
        'Content-Length': contentLength,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      uri: 'https://healthopx-patients.auth.us-east-1.amazoncognito.com/oauth2/token',
      body: formData,
      method: 'POST'
    }, 
    function (err, res, body) 
    {
        console.log('Sucessful Post Request From API');
        console.log('body:\n', body);
  });


  res.render(priDir + "patient.html");
});
//Code to return patient profile page!
router.get('/patient-profile.html', function (req, res) 
{
  res.render(priDir + "patient-profile.html" );
});
//Code to return filbox page!
router.get('/fillbox.html', function (req, res) 
{
  res.render(priDir + "fillbox.html" );
});
//Code to return confirmation page!
router.get('/confirmation.html', function (req, res) 
{
  res.render(pubDir + "confirmation.html" );
});
//Code to return home page!
router.get('/home.html', function (req, res) 
{
  res.render(pubDir + "home.html" );
});
//Code to return home page!
router.get('/results.html', function (req, res) 
{
  res.render(pubDir + "results.html" );
});
//Code to return register page!
router.get('/signup.html', function (req, res) 
{
  var message='';
  var rows = 0;
  console.log('message: ', message);
  console.log('rows: ', rows);
  res.render(pubDir + "signup.html", {message: message, rows: rows} );
});

module.exports = router;