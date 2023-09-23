var apiKey = "335b03d2a6e3137c7965bf9f35913d33"

function searchWeather() {
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

    searchButton.addEventListener("click", function () {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)

                fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&appid=${apiKey}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)


                    })
            })
    })

}