// ⏰Feature #1
// In your project, display the current date and time using JavaScript: Tuesday 16:00

// 🕵️‍♀️Feature #2
// Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

// 🙀Bonus Feature
// Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.


// now.getMinutes();                     // 0,1,2, 12
// now.getHours();                      //1, 2, 3, 4
// now.getDate();                       //1, 2, 3, 4
// now.getDay();                        // 0, 1, 2
// now.getMonth();                      // 0, 1, 2
// now.getFullYear();                      // 2021




// var timeToday = new Date()
// var currentDay = now.getDay()
// var currentTime = now.getHours()
// var currentMinute = now.getMinutes()

// function timeNow(){
//   var dayWeeks = ["Monday","Tuesday","Wenesday","Thursday","Friday","Saturday","Sunday"]
//   console.log(dayWeeks[currentDay])
  
// }

// timeNow()


var dateElement = document.querySelector("#date-element");

var currentDay = new Date();
var days = ["Sunday","Monday","Tuesday","Wenesday","Thursday","Friday","Saturday"]
var day = currentDay.getDay();
var hours = currentDay.getHours();
var minutes= currentDay.getMinutes();

dateElement.innerHTML = `${days[day]} ${hours}:${minutes}`