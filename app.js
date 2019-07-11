  //< General app to handle all the back end of the site!
  
var express = require('express')
  , http = require('http')
  , path = require('path')
  , aws = require('aws-sdk')
  , mysql = require('mysql')
  , bodyParser = require('body-parser');

// Express instance managing the backend!
var app = express();
var publicDir = require('path').join(__dirname,'/public');
aws.config.update({region: 'us-east-2	'})
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Connection to the database!
var connection = mysql.createConnection(
{
  host     : "aa4ue4rcwwjj6o.clkibeiyg6rg.us-east-2.rds.amazonaws.com",
  user     : "healthopx",
  password : "minorities4excellence",
  port     : 3306,
  database : "ebdb"
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
  console.log("*****" + process.env.RDS_HOSTNAME);
});

//Code to return defult main page!
app.get('/', function (req, res) 
{
   res.render("index.html" );
});
//Code to return local page!
app.get('/local.html', function (req, res) 
{
  res.render("local.html" );
});
//Code to return contact page!
app.get('/contact.html', function (req, res) 
{
  res.render("contact.html" );
});
//Code to return signin page!
app.get('/signin.html', function (req, res) 
{
  var rows = 1;
  var message = '';
  res.render("signin.html", {rows: rows, message: message});
});
//Code to return regestration form page!
app.get('/regform.html', function (req, res) 
{
  res.render("regform.html" );
});
//Code to return patient page!
app.get('/patient.html', function (req, res) 
{
  res.render("patient.html" );
});
//Code to return patient profile page!
app.get('/patient-profile.html', function (req, res) 
{
  res.render("patient-profile.html" );
});
//Code to return filbox page!
app.get('/fillbox.html', function (req, res) 
{
  res.render("fillbox.html" );
});
//Code to return confirmation page!
app.get('/confirmation.html', function (req, res) 
{
  res.render("confirmation.html" );
});
//Code to return index page!
app.get('/index.html', function (req, res) 
{
  res.render("index.html" );
});
//Code to return register page!
app.get('/signup.html', function (req, res) 
{
  var message='';
  var rows = 0;
  console.log('message: ', message);
  console.log('rows: ', rows);
  res.render("signup.html", {message: message, rows: rows} );
});



// Function to sign up new user!
// If user exists, will prompt user to enter new email
// If user is new, will be redirected into the sign in page
app.post('/signup', function(req, res)
{
  // Output stuff for local debugging if possible
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