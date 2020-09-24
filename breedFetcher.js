const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let site = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(`${site}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (data.length === 0) {
      error = "Error";
      desc = null;
    }
    else {
      error = error;
      desc = data[0]["description"];
      callback(null, desc);
    }
  });
};

module.exports = { fetchBreedDescription };
