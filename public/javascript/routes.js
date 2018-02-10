
const request = require("request");
var zipcodes = require('zipcodes');
var text1;
var text2; 
var text3; 


function myFunction(){
	text1 = document.getElementById("c1").value;
	text2 = document.getElementById("c2").value;
	text3 = document.getElementById("c3").value;
	
	var arr1 = text1.split(',');
	var arr2 = text2.split(',');
	var arr3 = text3.split(',');
	console.log(arr1);
	console.log(arr2);
	console.log(arr3);

	var d1; 
	var d2; 
	var d3; 

	var l = zipcodes.lookupByName(arr1[0], arr1[1]);
	var lat1 = l[0].latitude;
	var long1 = l[0].longitude;

	var a = zipcodes.lookupByName(arr2[0], arr2[1]);
	var lat2 = a[0].latitude;
	var long2 = a[0].longitude;

	var t = zipcodes.lookupByName(arr3[0], arr3[1]);
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

	var arr = [d1,d2,d3];
	arr.sort();

	window.location = "results.html";
}


var submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", () => {
	console.log("click handled");
	document.getElementById('appear').setAttribute('id', 'disappear');
	myFunction();
});






