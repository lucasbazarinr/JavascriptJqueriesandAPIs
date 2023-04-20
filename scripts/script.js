$(document).ready(function () {
    var apiKey = "ff0eba7e5151b81bf8046d79f997a4bb";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&units=metric&appid=" + apiKey;
    $.getJSON(apiUrl, function (data) {
        console.log(data);
        var weatherCondition = data.weather[0].description;
        var weatherIcon = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
        var location = data.name + ", " + data.sys.country;
        var temperature = Math.round(data.main.temp) + "°C";
        $("#weather-condition").text(weatherCondition);
        $("#weather-icon").attr("src", weatherIcon);
        $("#location").text(location);
        $("#temperature").text(temperature);
    });
});