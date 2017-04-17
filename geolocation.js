/*****************
Geolocation
*******************/
// const geoKey = process.env.geoKey;
// const geoUrl = ("https://www.googleapis.com/geolocation/v1/geolocate?key="+geoKey)
// request(geoUrl,function(req,res){

//   console.log(res.body)
// })
var os = require('os');
var ifaces = os.networkInterfaces();
var deviceIp=ifaces
console.log(deviceIp)
where.is('96.66.84.66', function(err, result) {
  if (result) {
    console.log('City: ' + result.get('city'));
    console.log('State / Region: ' + result.get('region'));
    console.log('State / Region Code: ' + result.get('regionCode'));
    console.log('Zip: ' + result.get('postalCode'));
    console.log('Country: ' + result.get('country'));
    console.log('Country Code: ' + result.get('countryCode'));
    console.log('Lat: ' + result.get('lat'));
    console.log('Lng: ' + result.get('lng'));
  }
});
var ip = require("ip");
console.dir ( ip.address() );