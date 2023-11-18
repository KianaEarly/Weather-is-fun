var apiKey = "335b03d2a6e3137c7965bf9f35913d33"

var searchInput = document.querySelector("#searchBar")
var searchButton = document.querySelector("#searchButton")
var searchHistory = document.querySelector("#searchHistory")
var city = document.querySelector("#city")
var temp = document.querySelector("#temp")
var wind = document.querySelector("#wind")
var humidity = document.querySelector("#humidity")
var icon = document.querySelector("#icon")

var date1 = document.querySelector("#date1")
var temp1 = document.querySelector("#temp1")
var wind1 = document.querySelector("#wind1")
var humidity1 = document.querySelector("#humidity1")
var icon1 = document.querySelector("#icon1")

var date2 = document.querySelector("#date2")
var temp2 = document.querySelector("#temp2")
var wind2 = document.querySelector("#wind2")
var humidity2 = document.querySelector("#humidity2")
var icon2 = document.querySelector("#icon2")

var date3 = document.querySelector("#date3")
var temp3 = document.querySelector("#temp3")
var wind3 = document.querySelector("#wind3")
var humidity3 = document.querySelector("#humidity3")
var icon3 = document.querySelector("#icon3")

var date4 = document.querySelector("#date4")
var temp4 = document.querySelector("#temp4")
var wind4 = document.querySelector("#wind4")
var humidity4 = document.querySelector("#humidity4")
var icon4 = document.querySelector("#icon4")

var date5 = document.querySelector("#date5")
var temp5 = document.querySelector("#temp5")
var wind5 = document.querySelector("#wind5")
var humidity5 = document.querySelector("#humidity5")
var icon5 = document.querySelector("#icon5")

var searchHistoryArr = JSON.parse(localStorage.getItem("searchHistory")) || [];
const maxSearchsInList = 5;
let cityName = "";

function searchWeather() {

  searchButton.addEventListener("click", function () {
    searchHistoryArr.push(searchInput.value)
    manageSearchHistoryList();
    localStorage.setItem("searchHistory", JSON.stringify(searchHistoryArr))
    displayCityBtns();
    console.log("fetch")
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=imperial`)
      .then(res => res.json())
      .then(data => {

        console.log(data)
        city.textContent = data.name
        temp.textContent = "Temperature: " + data.main.temp
        humidity.textContent = "Humidity: " + data.main.humidity
        wind.textContent = "Wind Speed: " + data.wind.speed
        icon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&appid=${apiKey}&units=imperial`)
          .then(res => res.json())
          .then(data => {
            console.log(data)

            temp1.textContent = "Temperature: " + data.list[3].main.temp
            humidity1.textContent = "Humidity: " + data.list[3].main.humidity
            wind1.textContent = "Wind Speed: " + data.list[3].wind.speed
            date1.textContent = data.list[3].dt_txt.split(" ")[0]
            icon1.src = "https://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + "@2x.png"

            temp2.textContent = "Temperature: " + data.list[11].main.temp
            humidity2.textContent = "Humidity: " + data.list[11].main.humidity
            wind2.textContent = "Wind Speed: " + data.list[11].wind.speed
            date2.textContent = data.list[11].dt_txt.split(" ")[0]
            icon2.src = "https://openweathermap.org/img/wn/" + data.list[11].weather[0].icon + "@2x.png"

            temp3.textContent = "Temperature: " + data.list[19].main.temp
            humidity3.textContent = "Humidity: " + data.list[19].main.humidity
            wind3.textContent = "Wind Speed: " + data.list[19].wind.speed
            date3.textContent = data.list[19].dt_txt.split(" ")[0]
            icon3.src = "https://openweathermap.org/img/wn/" + data.list[19].weather[0].icon + "@2x.png"

            temp4.textContent = "Temperature: " + data.list[27].main.temp
            humidity4.textContent = "Humidity: " + data.list[27].main.humidity
            wind4.textContent = "Wind Speed: " + data.list[27].wind.speed
            date4.textContent = data.list[27].dt_txt.split(" ")[0]
            icon4.src = "https://openweathermap.org/img/wn/" + data.list[27].weather[0].icon + "@2x.png"

            temp5.textContent = "Temperature: " + data.list[35].main.temp
            humidity5.textContent = "Humidity: " + data.list[35].main.humidity
            wind5.textContent = "Wind Speed: " + data.list[35].wind.speed
            date5.textContent = data.list[35].dt_txt.split(" ")[0]
            icon5.src = "https://openweathermap.org/img/wn/" + data.list[35].weather[0].icon + "@2x.png"

          })
      })
  })
}

searchWeather();

function removeDuplicates(data) {
  return data.filter((value, index) => data.indexOf(value) === index)
}

// Function to manage the arrray of cities the user has searched
function manageSearchHistoryList() {
  // searchHistoryArr.unshift(cityName); //<--- Adds the city name to the array. Unshift puts it in the top and shifts the list down.

  // This for loop deletes duplicate city names
  // for (i=0; i< searchHistoryArr.length; i++) {
  //   if (searchInput.value === searchHistoryArr[i]) {
  //     searchHistoryArr.splice(i,1);
  //   }
  // }
  removeDuplicates(searchHistoryArr)
  // Keep the searchHistoryArr length at 5 
  while (searchHistoryArr.length > maxSearchsInList) {
    searchHistoryArr.pop(); //<--- pop will remove 1 name from the bottom of array.
  };

  // Set the array into local storage in 'cities'
  // localStorage.setItem("cities", JSON.stringify(searchHistoryArr));
};

// Function to get and parse the array in local storage.
function buildSearchHistoryList() {
  // Get the Item out of local storage
  let localReturn = localStorage.getItem("cities");
  if (localReturn) {
    searchHistoryArr = JSON.parse(localReturn);
  };
};

// Function to display the recent drinks as buttons in the recent search container.
function displayCityBtns() {
  removeButtons();

  for (i = 0; i < searchHistoryArr.length; i++) {
    var but1 = document.createElement('button');
    but1.className = 'btn';
    but1.id = searchHistoryArr[i];
    but1.textContent = searchHistoryArr[i].toUpperCase();

    searchHistory.appendChild(but1);

    but1.addEventListener('click', function () {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.textContent}&appid=${apiKey}&units=imperial`)
        .then(res => res.json())
        .then(data => {

          console.log(data)
          city.textContent = data.name
          temp.textContent = "Temperature: " + data.main.temp
          humidity.textContent = "Humidity: " + data.main.humidity
          wind.textContent = "Wind Speed: " + data.wind.speed
          icon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"

          fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.textContent}&appid=${apiKey}&units=imperial`)
            .then(res => res.json())
            .then(data => {
              console.log(data)

              temp1.textContent = "Temperature: " + data.list[3].main.temp
              humidity1.textContent = "Humidity: " + data.list[3].main.humidity
              wind1.textContent = "Wind Speed: " + data.list[3].wind.speed
              date1.textContent = data.list[3].dt_txt.split(" ")[0]
              icon1.src = "https://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + "@2x.png"

              temp2.textContent = "Temperature: " + data.list[11].main.temp
              humidity2.textContent = "Humidity: " + data.list[11].main.humidity
              wind2.textContent = "Wind Speed: " + data.list[11].wind.speed
              date2.textContent = data.list[11].dt_txt.split(" ")[0]
              icon2.src = "https://openweathermap.org/img/wn/" + data.list[11].weather[0].icon + "@2x.png"

              temp3.textContent = "Temperature: " + data.list[19].main.temp
              humidity3.textContent = "Humidity: " + data.list[19].main.humidity
              wind3.textContent = "Wind Speed: " + data.list[19].wind.speed
              date3.textContent = data.list[19].dt_txt.split(" ")[0]
              icon3.src = "https://openweathermap.org/img/wn/" + data.list[19].weather[0].icon + "@2x.png"

              temp4.textContent = "Temperature: " + data.list[27].main.temp
              humidity4.textContent = "Humidity: " + data.list[27].main.humidity
              wind4.textContent = "Wind Speed: " + data.list[27].wind.speed
              date4.textContent = data.list[27].dt_txt.split(" ")[0]
              icon4.src = "https://openweathermap.org/img/wn/" + data.list[27].weather[0].icon + "@2x.png"

              temp5.textContent = "Temperature: " + data.list[35].main.temp
              humidity5.textContent = "Humidity: " + data.list[35].main.humidity
              wind5.textContent = "Wind Speed: " + data.list[35].wind.speed
              date5.textContent = data.list[35].dt_txt.split(" ")[0]
              icon5.src = "https://openweathermap.org/img/wn/" + data.list[35].weather[0].icon + "@2x.png"

            })
        })
    });
  }
};

// Function that removes unwanted buttons from the recent searches list
function removeButtons() {
  var buttons = searchHistory.getElementsByTagName('button');

  for (let index = 0; index < buttons.length; index++) {
    buttons[index].remove();
  };
  buttons = searchHistory.getElementsByTagName('button');
  for (let index = 0; index < buttons.length; index++) {
    buttons[index].remove();
  };
  buttons = searchHistory.getElementsByTagName('button');
  for (let index = 0; index < buttons.length; index++) {
    buttons[index].remove();
  };
};


// Builds the list of recent searches when the user loads in
buildSearchHistoryList();
// removeButtons();
manageSearchHistoryList();

// Function that runs after buttons in recent drink list are clicked
var cityBtnHandler = function (event) {
  event.preventDefault();

  cityName = event.target.getAttribute('id');
  console.log('city', cityName);
  searchWeather();
};

