//< General app to handle all the back end of the site!
  
var express = require('express')
  , http = require('https')
  , path = require('path')
  , aws = require('aws-sdk')
  , mysql = require('mysql')
  , bodyParser = require('body-parser')
  , CognitoExpress = require("cognito-express")
  , cookieParser = require('cookie-parser');

// Express instance managing the backend!
var app = express();
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cookieParser());


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


// Function to sign up new user!
// If user exists, will prompt user to enter new email
// If user is new, will be redirected into the sign in page
app.post('/signup', function(req, res)
{
  // Output stuff for local debugging if possible
  console.log(req);
  console.log(req.body);
  console.log();
  console.log(res.body);

  // Variables that to access html form input!
  var f_name = req.body.fname;
  var l_name = req.body.lname;
  var email = req.body.email;
  var pw = req.body.pass;

  var query_str = 'SELECT * FROM users WHERE u_email = ?';

  connection.query(query_str, [email], function(error, results, fields)
  {
    if(error) 
    {
      console.log("Error during database query. (/signup)")
      throw error;
    }

    else
    {
      console.log("Sucess during database query. (/signup)")
    }

    // Debugging to hit the DB and get users with similar emails
    console.log("Number of rows for query: " + results.length);
    console.log("QUERY: SELECT * FROM users WHERE u_email = " + email);

    if(results.length == 0)
    {
      var insert_qry = 'INSERT INTO users (u_email, u_fname, u_lname, u_pw) VALUES (?, ?, ?, ?)';
      connection.query(insert_qry, [email, f_name, l_name, pw], function(error, results, fields)
      {
        if(error)
        {
          console.log("Error adding new user to table");
          throw error;
        }

        console.log(f_name + " " + l_name + " has been successfully added!");    
        res.render('signin.html', {rows: 1});
      });
    }

    else
    {
      console.log(email + " already exists as a user!");   
      res.render('signup.html', {rows: results.length, message: 'Email already in use, please use a different one! :('});
    }
  });
});

app.post('/signin', function(req, res)
{
  console.log("*signin*: " + req);
  console.log('hello world');
  console.log(req.body);
  console.log();
  console.log(res.body);


  var name = req.body.name;
  var pw = req.body.pw;
  var query_str = 'SELECT u_pw FROM users WHERE u_email = ?';

  connection.query(query_str, [name], function(error, results, fields)
  {
    if(error)
    {
      console.log("Error during db query. (/signin)");
      throw error;
    }

    console.log("Number of rows for query: ", results.length);
    console.log("Results: ");
    console.log(results);
    console.log(results[0]);
    console.log(results[0]['u_pw']);
    console.log('SELECT u_pw FROM u_basic WHERE u_email = ' + name);

    if(results.length == 0)
    {
      console.log("No accounts were found with corresponding email!");
      res.render('signin.html', {rows: results.length, message: 'No accounts were found with corresponding email!'});
      return; 
    }

    if(pw == results[0]['u_pw'])
    {
      console.log('Succesful login!');
      res.render('patient-profile.html');
      return;
    }

    else
    {
      console.log("Credentials not found, please try again!");
      res.render('signin.html', {rows: 0, message: 'No accounts were found with corresponding credentials!'});
      return;
    }
  });
});

app.get('/email', function (req, res) 
{
  // Create sendEmail params 
  var params = 
  {
    Destination: { /* required */
      CcAddresses: [
        'EMAIL_ADDRESS',
        /* more items */
      ],
      ToAddresses: [
        'EMAIL_ADDRESS',
        /* more items */
      ]
    },
    Message: { /* required */
      Body: { /* required */
        Html: {
        Charset: "UTF-8",
        Data: "HTML_FORMAT_BODY"
        },
        Text: {
        Charset: "UTF-8",
        Data: "TEXT_FORMAT_BODY"
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Test email'
      }
      },
    Source: 'SENDER_EMAIL_ADDRESS', /* required */
    ReplyToAddresses: [
      'EMAIL_ADDRESS',
      /* more items */
    ],
};
// Create the promise and SES service object
var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
sendPromise.then(
  function(data) {
    console.log(data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });  
});

var port = process.env.PORT || 3000;


var server = app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port + '/');
});

// https://stackoverflow.com/questions/20089582/how-to-get-a-url-parameter-in-express

// arn:aws:iam::734985897378:role/service-role/patient-SMS-Role

// The link bellow is to access hox patient logins
// https://healthopx-patients.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=2l7p6u93r60avs9fko3aorm1s6&redirect_uri=https://www.healthopx.com/patient.html&state=STATE