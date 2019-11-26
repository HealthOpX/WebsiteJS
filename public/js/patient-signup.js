console.log(1);
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
console.log(2);
const poolData = {
  UserPoolId : "us-east-1_mMql1Iq1E", // Your user pool id here
  ClientId : "2el3adplalc62tmgi3etgqvj2v" // Your client id here
};
console.log(3);
const pool_region = 'us-east-1';
console.log(4);
const userPool = new CognitoUserPool(poolData);
console.log(5);


function Click() {

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
  attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"middle_name",Value: mname}));
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