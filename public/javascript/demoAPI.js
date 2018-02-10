//const request = require("request");
var https = require("https");
const querystring = require('querystring');

var request = require("request-promise");

var appleButton = document.getElementById("apple");
appleButton.addEventListener("click", () => {
	console.log("click handled");
	appleCall();
});

function callAPI2(newUrl){
	//const url = "http://api.open-notify.org/iss-now.json"
	const urlReal = "https://southcentralus.api.cognitive.microsoft.com/customvision/v1.1/Prediction/f685ab4a-d527-4192-b48d-bfb3fd7f8094/url";
	
	var options = {
	  method: "POST",
	  uri: urlReal,
	  headers: {
	    'Prediction-Key': 'b0402e9cbe064ae3ad663ae7efbccc0c'
	  },
	  json: true, 
	  body: {"Url":  newUrl}
	};
    
	function callback(result) {
	    console.log(result.Predictions);
	    var firstProb = result.Predictions[0].Probability;
		var secProb = result.Predictions[1].Probability;
	    console.log(firstProb)
	    console.log(secProb)
	    if (firstProb>secProb){
	    	console.log(result.Predictions[0].Tag);
	    	var final = "Classification: " + result.Predictions[0].Tag;
	    	document.getElementById("appleTag").innerHTML = final;
	    }
	    else {
	    	console.log(result.Predictions[0].Tag);
	    	var final = "Classification: " + result.Predictions[1].Tag;
	    	document.getElementById("appleTag").innerHTML = final;
	    }
	}
	

	request(options)
		.then( callback)
		.catch( function(err) { 
			console.log(err); 
		})

 }




function appleCall(){
	var newUrl = document.getElementById("appleForm").value;
	document.getElementById("applePic").src = newUrl;
	callAPI2(newUrl);
}








//banana functions 

var bananaButton = document.getElementById("banana");
bananaButton.addEventListener("click", () => {
	console.log("click handled");
	bananaCall();
});

function callAPIBanana(newUrl){
	//const url = "http://api.open-notify.org/iss-now.json"
	const urlReal = "https://southcentralus.api.cognitive.microsoft.com/customvision/v1.1/Prediction/43d0e09c-6617-4d28-a23e-da0674a5495c/url"

	var options = {
	  method: "POST",
	  uri: urlReal,
	  headers: {
	    'Prediction-Key': 'b0402e9cbe064ae3ad663ae7efbccc0c'
	  },
	  json: true, 
	  body: {"Url":  newUrl}
	};
    
	function callback(result) {
	    console.log(result.Predictions);
	    var overProb = result.Predictions[0].Probability;
		var ripeProb = result.Predictions[1].Probability;
		var unripeProb = result.Predictions[2].Probability;

		var overTag = result.Predictions[0].Tag;
		var ripeTag = result.Predictions[1].Tag;
		var unripeTag = result.Predictions[2].Tag;

		var orig = [overProb, ripeProb, unripeProb];
		var tags = [overTag, ripeTag, unripeTag]; 
		var probs = [overProb, ripeProb, unripeProb]; 
		
		probs.sort();
		console.log(probs);
		var index = probs.indexOf(orig[2])
	    var tag = tags[index];
	    var final = "Classification: " + tag
	    console.log(final);
	    document.getElementById("bananaTag").innerHTML = final;
	}
	

	request(options)
		.then( callback)
		.catch( function(err) { 
			console.log(err); 
		})
 }



function bananaCall(){
	var newUrl = document.getElementById("bananaForm").value;
	document.getElementById("bananaPic").src = newUrl;
	callAPIBanana(newUrl);
}




