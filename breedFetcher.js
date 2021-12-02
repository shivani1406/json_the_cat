const request = require('request');
// const requestfunc = function(a) {
//   request(`https://api.thecatapi.com/v1/breeds/search?q=${a}`, (error, response, body) => {
//     const data = JSON.parse(body);
//   if(data[0] === undefined)
//   {
//     return (console.log("URL not correct"));
//   }  
//   try
//     {     
//     console.log(data[0].description);
//     }
//     catch(error){
//       console.log(error);
//       console.log('error: Requested breed not found'); // Print the error if one occurred
//       }
    
//   });
// }
const fetchBreedDescription = function(breedName, callback) {
// fetchBreedDescription(a, (error, description) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
  if(data[0] === undefined)
  {
    return (console.log("URL not correct"));
  }  
  try
    {     
    console.log(data[0].description);
    }
    catch(error){
      console.log(error);
      console.log('error: Requested breed not found'); // Print the error if one occurred
      }
    
  });
}
// });

// const args = process.argv.slice(2);
// fetchBreedDescription(args[0]);

module.exports = { fetchBreedDescription };