
const request = require("request");
const url = "https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?origins=47.6044,-122.3345;47.6731,-122.1185;47.6149,-122.1936&destinations=45.5347,-122.6231;47.4747,-122.2057&travelMode=driving&key=Aig6lADJLSD9gGYuKIF9FUKB-AeXsb0Gc9KG4h8B1aF5_e10JGOv4a1OQYe5rYl4"


request.get(url, (error, response, body) => {
  let json = JSON.parse(body);
  console.log(
   	json.resourceSets[0];
  );
}); 
