// const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
// const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
// const request = require('request');
// global.fetch = require('node-fetch');

// Modules, e.g. Webpack:
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

function Click() {
  // Create all the required cognito stuff
  const poolData = {
    UserPoolId : " us-east-1_mMql1Iq1E", // Your user pool id here
    ClientId : "2el3adplalc62tmgi3etgqvj2v" // Your client id here
    };
  const pool_region = 'us-east-1';
  const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

  // Get user data
  var attributeList = [];
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var mname = document.getElementById("mname").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var address = document.getElementById("address").value;
  var zip = document.getElementById("zip").value;
  var pass = document.getElementById("pass").value;
  var sex = document.getElementById("sex").value;
  var bday = document.getElementById("bday").value;



  var attributeList = [];
  attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"name",Value: fname}));
  attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"family_name",Value: lname}));
  attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"gender",Value: sex}));
  attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"birthdate",Value: bday}));
  attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"address",Value: address}));
  attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"email",Value: email}));
  attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"phone_number",Value: number}));

  userPool.signUp(email, pass, attributeList, null, function(err, result) {
    if (err) {
      alert(err.message || JSON.stringify(err));
      return;
    }
    var cognitoUser = result.user;
    console.log('user name is ' + cognitoUser.getUsername());
  });
}