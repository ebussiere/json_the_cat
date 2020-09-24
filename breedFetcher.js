const request = require('request');
'use strict';

const inputArgs = function() {
  return process.argv.slice(2);
};

const getBreeds = function() {
  let userArgs = inputArgs();
  let breed = userArgs[0];
  if (breed) {
    let site = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
    request(`${site}`, (error, response, body) => {
      if (!error) {
        const data = JSON.parse(body);
        if (data.length === 0) {
          console.log("Breed not found");
        } else {
          console.log(data);
        }
      } else {
        console.log("An Error Occured");
      }
    });
  } else {
    console.log("Enter a breed to search for as an argument ie: \"node breedFetcher.js balinese\"");
  }
};
getBreeds();