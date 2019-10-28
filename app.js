//< General app to handle all the back end of the site!
  
var routes = require('./source/router');
var express = require('express')
  , http = require('https')
  , path = require('path')
  , aws = require('aws-sdk')
  , mysql = require('mysql')
  , bodyParser = require('body-parser')
  , CognitoExpress = require("cognito-express")
  , CookieParser = require('cookie-parser');

aws.config.update({region: 'us-east-1'})

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

///< Setting up the Cognito Express variable!
const cogPatients = new CognitoExpress({
  region: "us-east-1",
  cognitoUserPoolId: "us-east-1_GLI7YUQ7p",
  tokenUse: "id", //Possible Values: access | id
  tokenExpiration: 3600000 //Up to default expiration of 1 hour (3600000 ms)
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

app.post('/api/patient-info', function(req, res) { 
  console.log('Grabbing patient info');
  console.log('Cookies:', req.cookies['HOX-PATIENT-VER']);
  let token = req.cookies['HOX-PATIENT-VER'];

  if(!token) { return res.status(401).send("Access Token Missing");}

  cogPatients.validate(token, function(err, response) {

    if(err) { return res.status(401).send(err);}

    console.log('response: ', response);
    return;
  });
  console.log('patient-info');
})

var port = process.env.PORT || 3000;


var server = app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port + '/');
}); 


// The link bellow is to access hox patient logins
// https://hox-patients.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=7t72cpc6ca0da3a84lcm367248&redirect_uri=https://healthopx-lb-1708489658.us-east-1.elb.amazonaws.com/patient.html&state=STATE