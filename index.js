$(document).ready(function () {

    $("#getWeather").click(function () {
        console.log("button clicked");

        var city = $("#cityInput").val();
        var apiKey = "ab810afeab1fb1cbb8e5dd64e784ac62";

        var url = "https://api.openweathermap.org/data/2.5/weather?q=" 
                    + city 
                    + "&appid=" + apiKey 
                    + "&units=metric";

        $.get(url, function (data) {

            console.log(data);
            $("#city").text(data.name);
            $("#temp").text(Math.round(data.main.temp) + "°C");
            $("#desc").text(data.weather[0].description);

        }).fail(function () {
            alert("City not found");
        });

    });

});