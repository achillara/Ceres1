const request = require("request");

function callAPI(){
	const url = "http://api.open-notify.org/iss-now.json"

	request.get(url, (error, response, body) => {
	  let json = JSON.parse(body);
	  console.log("hello");
	}); 
}
