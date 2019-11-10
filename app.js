//< General app to handle all the back end of the site!

var routes = require('./source/router');
var express = require('express')
var http = require('https');
var path = require('path');
var aws = require('aws-sdk');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var CognitoExpress = require("cognito-express");
var CookieParser = require('cookie-parser');
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
var fetch = require("node-fetch");

aws.config.update({region: 'us-east-1'});

// Connection to the database!
var db = mysql.createConnection(
{
  host     : "hox-db.cr7d76ixbcim.us-east-1.rds.amazonaws.com",
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT,
  database : process.env.RDS_DB_NAME
});

db.connect(function(err) {
  if (err)
  {
    console.error('Database connection failed: ' + err.stack);
    console.log('process.env.RDS_HOSTNAME: ' + process.env.RDS_HOSTNAME);
    console.log('process.env.RDS_USERNAME: ' + process.env.RDS_USERNAME);
    console.log('process.env.RDS_PASSWORD: ' + process.env.RDS_PASSWORD);
    console.log('process.env.RDS_PORT: ' + process.env.RDS_PORT);
    console.log('process.env.RDS_DB_NAME: ' + process.env.RDS_DB_NAME);
    console.error('^^Error in BE^^');
    return;
  }
  console.log('Connected to database.');
});


// Express instance managing the backend!
var app = express();
app.set('views', __dirname + '/views');
app.set('source', __dirname + '/source');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(CookieParser());
app.use('/', routes);

///< This recieved POST request will check to see if there phone number has been used
app.post('/api/new-patient', function(req, res) {
  console.log('new-patient-check POST RECIVED');

  // Grab the user phone number to see if patient is new new
  var phone = req.body.phone;
  var query = 'SELECT email FROM patients WHERE phone = ' + phone;
  console.log('qurry: ' + query);

  // Check to see if number exists in the db
  db.query(query, [], function(err, rows, fields) {
    if(err) {throw err;}

    // If new new
    if(rows.length == 0) {
      res.send('1');
      console.log('/api/new-patient: There were no matches!')
      return;
    }
    else {
      res.send('0');
      console.log('/api/new-patient: There was a match!')
      return;
    }
  });
});

// Will output patient infor in the logs for debugging
app.post('/api/patient-info', function(req, res) {
  console.log('Grabbing patient info');
  console.log('Cookies:', req.cookies['HOX-PATIENT-VER']);

  // First check to see if token even exists
  if(!token) { return res.status(401).send("Access Token Missing");}

  // Get token and verify it!
  let token = req.cookies['HOX-PATIENT-VER'];
  cogPatients.validate(token, function(err, response) {

    if(err) { return res.status(401).send(err);}

    console.log('response: ', response);
    return;
  });
  console.log('patient-info');
})

// Will allow us to reset attributes as admins
// Cognito setting for patient allows email to be the username
app.post('/api/patient-att-update', function(req, res) {
  console.log('/api/patient-att-update POST RECIVED');
  var username = req.body.name;
  var password = req.body.pw;

  var authData = {
    Username : username,
    Password : password,
  };

  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authData);
  var poolData = { UserPoolId : 'us-east-1_LmtX2y4BH',
        ClientId : '2l7p6u93r60avs9fko3aorm1s6'
      };
  var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  var userData = {
        Username : username,
        Pool : userPool
      };

  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      var accessToken = result.getAccessToken().getJwtToken();

      /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer*/
      var idToken = result.idToken.jwtToken;
      console.log('/api/patient-att-update - Authentification PASS');
    },

    onFailure: function(err) {
      console.log('/api/patient-att-update - Authentification FAIL');
      alert(err);
    },
  });


})

var port = process.env.PORT || 3000;


var server = app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port + '/');
});


// The link bellow is to access hox patient logins
//  https://healthopx-patients.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=2l7p6u93r60avs9fko3aorm1s6&redirect_uri=https://healthopx-lb-1708489658.us-east-1.elb.amazonaws.com/patient.html