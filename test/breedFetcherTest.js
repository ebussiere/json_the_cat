//const assertEqual = require('../assertEqual.js');
const { fetchBreedDescription } = require('../breedFetcher');

const chai = require('chai');
let assert = chai.assert;

describe('#breedFetcher', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      assert.equal(expectedDesc, desc);
      done();
    });
  });

  it('Returns error for invalid input string, via callback', (done) => {
    fetchBreedDescription('asdf', (err, desc) => {
      assert.equal(err, "Error");
      const expectedDesc = "";
      assert.equal(expectedDesc, desc);
      done();
    });
  });






});


