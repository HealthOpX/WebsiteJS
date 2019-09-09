const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const AWS = require('aws-sdk');
const request = require('request');
const jwkToPem = require('jwk-to-pem');
const jwt = require('jsonwebtoken');
var request = require('request');
var querystring = require('querystring');

global.fetch = require('node-fetch');

const poolData = {    
  UserPoolId : "us-east-1_GLI7YUQ7p",  
  ClientId : "7t72cpc6ca0da3a84lcm367248" 
  }; 
const pool_region = 'us-east-1';
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

function SignUpUser()
{
  console.log('begining to sign up a user!');
  
  // Initialize all variables needed to sign up new user
  var attributeList = [];
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var address = document.getElementById("address").value;
  var pass = document.getElementById("pass").value;
  var sex = document.getElementById("sex").value;
  var bday = document.getElementById("bday").value;
  var seen = false;

  request.post({
    url:     'https://healthopx-lb-1708489658.us-east-1.elb.amazonaws.com/api/new-patient',
    body:    { phone: number }
  }, function(error, response, body){

    if(error) {
      console.log(error);
      return;
    }
    console.log('body:\n');
    console.log(body);
  });

  // If not seen before register the user

  if (seen) {
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"custom:FirstName",Value: fname}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"custom:LastName",Value: lname}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"gender",Value: sex}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"birthdate",Value: bday}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"address",Value: address}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"email",Value: email}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"phone_number",Value: number}));

    userPool.signUp(email, pass, attributeList, null, function(err, result){
        if (err) {
            console.log(err);
            return;
        }
        cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
    });
  }
  // Else say the number has already been used
  else {
    // Output Error saying that this number is already used!
    console.log('This user has been seen before!');
  }

  // Send api request to set new id for new register user!

  return;
}