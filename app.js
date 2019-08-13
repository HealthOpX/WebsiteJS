//< General app to handle all the back end of the site!
  
var express = require('express')
  , http = require('https')
  , path = require('path')
  , aws = require('aws-sdk')
  , mysql = require('mysql')
  , bodyParser = require('body-parser')
  , CognitoExpress = require("cognito-express")
  , CookieParser = require('cookie-parser');

// Express instance managing the backend!
var app = express();
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(CookieParser());


var routes = require('./source/router');


aws.config.update({region: 'us-east-1'})

// Connection` to the database!

// var connection = mysql.createConnection(
// {
//   host     : process.env.RDS_HOSTNAME,
//   user     : process.env.RDS_USERNAME ,
//   password : process.env.RDS_PASSWORD,
//   port     : process.env.RDS_PORT,
//   database : process.env.RDS_DB_NAME
// });

// connection.connect(function(err) {
//   if (err) 
//   {
//     console.error('Database connection failed: ' + err.stack);
//     console.error('***Error in BE***');
//     return;
//   }
//   console.log('Connected to database.');
// });


app.use('/', routes);

var port = process.env.PORT || 3000;


var server = app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port + '/');
});


// The link bellow is to access hox patient logins
// https://healthopx-patients.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=2l7p6u93r60avs9fko3aorm1s6&redirect_uri=https://www.healthopx.com/patient.html&state=STATE