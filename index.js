const { fetchBreedDescription } = require('./breedFetcher.js');

const breedName = process.argv[2];

// fetchBreedDescription(breedName, function (error, desc) {
//   if (error) {
//     console.log('Error fetch details: ', error);
//   } else {
//     console.log(desc);
//   }
// });

const myCallBack = function(error, desc)  {
  if (error) {
    console.log('Error fetch details: ', error);
  } else {
    console.log(desc);
  }
};

fetchBreedDescription(breedName, myCallBack);