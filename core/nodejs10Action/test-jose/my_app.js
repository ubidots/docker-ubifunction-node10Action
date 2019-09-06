/*
 * This code demonstrates a simple HTTP endpoint that receives an Ubidots token
 * and a temperature value as URL parameters, then uses this data to make an
 * HTTP POST request to Ubidots API.
 *
 * You can build a URL as explained below, and paste it into your web browser to
 * test the function. Example:
 *
 * https://parse.ubidots.com/{your-function-URL}/?token={YOUR-TOKEN}&device=sample-function&temperature=45
 * 
 * Example by: David Sánchez, developer at @Ubidots
 */

// Import the 'request-promise' library so we can make HTTP request from the function
var request = require('request-promise');

// Main function - runs every time the function is executed.
// "args" is a dictionary containing both the URL params and the HTTP body (for POST requests).
async function main(args) {

  // Grab the token and device label from URL parameters, then erase them from the args dictionary
  var ubidots_token = "BBFF-IONay56PteRbxIMQbk4ppZ81VFX7yHGbZe5CTfmgEwZyqhbWnVbcVC9";
  var device_label = "demo";

  // Use the remaining parameters as payload
  var payload = {'demo': 1};

  // Log the payload to the console, for debugging purposes. You may access the function's logs using
  // the option in the above header.
  console.log(payload);

  // Send the payload to Ubidots
  var response = await ubidots_request(ubidots_token, device_label, payload);

  // Log Ubidots response to the console
  console.log(response);

  // Pass Ubidots' API response as the function's reponse
  return response;
}

// This function builds an HTTP POST request to Ubidots
async function ubidots_request(token, label, body) {
  var options = {
    method: 'POST',
    url: 'https://industrial.api.ubidots.com/api/v1.6/devices/' + label,
    body: body,
    json: true,
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': token
    }
  };
  return await request.post(options);
}
