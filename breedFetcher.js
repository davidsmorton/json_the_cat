const request = require('request');
let userInput = process.argv.slice(2);
let search = userInput[0];
//console.log("Check____________", search);


request(`https://api.thecatapi.com/v1/breeds/search?q=${search}`, function(error, response, body) {

  if (error) {
    return console.error('_____Request FAILED', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  }
  
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("your cat has not been found");

  } else {
    console.log('data:', data[0].description); // Print the HTML for the URL input.
  //console.log(data);
  }
});