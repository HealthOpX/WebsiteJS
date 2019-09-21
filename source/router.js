var express = require('express');
var router = express.Router();
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
  
  // Variable that will hold the id_token
  id = ''; 

  // all the data needed for the post request to get the jwt
  var form = 
  {
    grant_type: 'authorization_code',
    client_id: '7t72cpc6ca0da3a84lcm367248',
    code: req.query.code,
    redirect_uri: 'https://healthopx-lb-1708489658.us-east-1.elb.amazonaws.com/patient.html',
    client_secret: 'av7cdhub82h1dkfdjotp8er7rf6dh6oqjr1b5ndibp11ismsf6l'
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
      uri: 'https://hox-patients.auth.us-east-1.amazoncognito.com/oauth2/token',
      body: formData,
      method: 'POST'
    }, 
    function (err, ress, body) 
    {
      var json = JSON.parse(body);
      console.log('*json:', json);
      console.log('*id: ', json['id_token']);
      res.cookie('HOX-PATIENT-VER', json['id_token']);
      res.render(priDir + "patient.html");
  });
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