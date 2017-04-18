const request			 	= require('request'),
      dotenv  			= require('dotenv').config(),
      firebase 			= require('firebase'),
      admin   			= require('firebase-admin'),
      serviceAccount= require("./serviceAccount.json"),
      bodyParser 		= require('body-parser'),
      rad     			= require('./radius.js'),
      geofire 			= require('geofire')

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
let testSnapLocation = rad.getRadius(35.5420586,-77.055535) //test: snap #1055
console.log(testSnapLocation)
let snapLat = snaps
  .orderByChild('lat')
  .startAt(testSnapLocation[5].lat+"-") // "-"makes a string for query
  .endAt(testSnapLocation[1].lat+"-")
  .once('value')
  .then(function(snap){
    snap.forEach(function(data){
      if(data.val().lng<=testSnapLocation[0].lng && data.val().lng>=testSnapLocation[3].lng){
      	console.log(data.val().title)
      }
    })
  })

/*****************
DB push
*******************/

module.exports = {
	db:db
}