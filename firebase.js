const request			 	= require('request'),
      dotenv  			= require('dotenv').config(),
      firebase 			= require('firebase'),
      admin   			= require('firebase-admin'),
      serviceAccount= require("./serviceAccount.json"),
      bodyParser 		= require('body-parser')

/*****************
Firebase Setup
*******************/
var config = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.databaseURL
};
const fireApp = admin.initializeApp(config);
const db = admin.database(fireApp);
// const storage = defaultApp.storage()
const ref = db.ref()
const snaps = db.ref("snaps")
const tags = db.ref("tags")
const users = db.ref("users")


/*****************
DB get
*******************/

/********************User queries************************/
// email by id #
// let getEmail = users
//   .child('1000')
//   .once("value")
//   .then(function(data){
//     console.log(data.val().email)
//   })
// // user by given email
// let getEmail2 = users
//   .orderByChild('email')
//   .equalTo('jimmys@jimmyscoffee.ca')
//   .once('value')
//   .then(function(data){
//     console.log(data.val())
//   })
// first name by given email
// let getEmail3 = users
//   .orderByChild('email')
//   .equalTo('bitroshan7@gmail.com')
//   .once('value')
//   .then(function(user){
//     data.forEach(function(data){
//       console.log(data.key,data.val().first_name)
//     })
//   })
/********************Snap queries************************/
// let snapLat = snaps
//   .orderByChild('title')
//   .equalTo('Sixth St Tavern')
//   .once('value')
//   .then(function(snap){
//     snap.forEach(function(data){
//       console.log(data.key,data.val().radi)
//     })
//   })
/*****************
DB push
*******************/

module.exports = {
	db:db
}