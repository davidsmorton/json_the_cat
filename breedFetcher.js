const request = require('request');

//let search = userInput[0];
//console.log("Check____________", search);

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) =>  {
  //console.log(body)
    if (error) {
      return callback(error, null);
    }
    
    const desc = JSON.parse(body);
    //console.log(desc)
    const breedObject = desc[0];
    //console.log(breed)
    if (breedObject) {
      callback(null, breedObject.description);
    } else {
      callback("no breed found");
    }
    
  });

};

//console.log(fetchBreedDescription());
module.exports = { fetchBreedDescription };