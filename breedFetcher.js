const request = require('request');
const requestfunc = function(a) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${a}`, (error, response, body) => {
    const data = JSON.parse(body);
  if(data[0] === undefined)
  {
    return (console.log("URL not correct"));
  }
  
  try
    {
      
    // console.log(data);
    // console.log(typeof data);
    console.log(data[0].description);
    }
    catch(error){
      console.log(error);
      console.log('error: Requested breed not found'); // Print the error if one occurred
      // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      // console.log('body:', body); // Print the HTML for the Google homepage.
      // console.log(data);
      // console.log(typeof body)
    
      
    }
    
  });
}


const args = process.argv.slice(2);
requestfunc(args[0]);