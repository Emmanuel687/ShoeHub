let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// Include the JavaScript file provided in your project, when loading your project,
//  ask the user "Enter a city" (example: Paris), alert "It is currently 19°C (66°F) 
// in Paris with a humidity of 80%"

// If the city doesn't exist in the object (i.e: Sydney), alert "Sorry, we don't know 
// the weather for this city, try going to https://www.google.com/search?q=weather+sydney". 
// Since this is an alert, the link shouldn't be clickable.



// write your code here
var cityName = prompt("Enter a City");
cityName = cityName.toLowerCase();

if (weather[cityName]!== undefined){
  var temperature = weather[cityName].temp;
  var humidity = weather[cityName].humidity;

  alert(`It is currently ${temperature} in ${cityName} with ${humidity}`);
}else(alert(`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${cityName}`));



