const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (desc !== "") {
    console.log(desc);
  } else if (error) {
    console.log("No Details Available");
  }
});

