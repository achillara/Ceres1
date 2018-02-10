
const request = require("request");
var zipcodes = require('zipcodes');
var text1 = document.getElementById(c1).innerHTML
console.log(text1)

var d1; 
var d2; 
var d3; 

var l = zipcodes.lookupByName('Cupertino', 'CA');
var lat1 = l[0].latitude;
var long1 = l[0].longitude;

var a = zipcodes.lookupByName('Cupertino', 'CA');
var lat2 = a[0].latitude;
var long2 = a[0].longitude;

var t = zipcodes.lookupByName('Cupertino', 'CA');
var lat3 = t[0].latitude;
var long3 = t[0].longitude;

const url = "https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?origins=40.440495,-79.943945&destinations=" +lat1+","+long1+";"+lat2+","+long2+";"+lat3+","+long3+"&travelMode=driving&key=Aig6lADJLSD9gGYuKIF9FUKB-AeXsb0Gc9KG4h8B1aF5_e10JGOv4a1OQYe5rYl4"

request.get(url, (error, response, body) => {
  let json = JSON.parse(body);
  console.log(json.resourceSets[0].resources[0].results[0].travelDuration)
  console.log(json.resourceSets[0].resources[0].results[1].travelDuration)
  console.log(json.resourceSets[0].resources[0].results[2].travelDuration)
  d1 = (json.resourceSets[0].resources[0].results[0].travelDuration)
  d2 = (json.resourceSets[0].resources[0].results[1].travelDuration)
  d3 = (json.resourceSets[0].resources[0].results[2].travelDuration)
}); 



