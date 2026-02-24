$(document).ready(function () {

    $("#btn").click(function () {

        var city = $("#cityInput").val();
        var apiKey = "ab810afeab1fb1cbb8e5dd64e784ac62";

        var url = "https://api.openweathermap.org/data/2.5/weather?q=" 
                    + city 
                    + "&appid=" + apiKey 
                    + "&units=metric";

        $.get(url, function (data) {
            console.log(data)

            $("#city").text(data.name);
            $("#temp").text(Math.round(data.main.temp) + "°C");
            $("#desc").text(data.weather[0].description);

            // Weather Icon
            var iconCode = data.weather[0].icon;
            var iconUrl = "https://openweathermap.org/img/wn/" 
                            + iconCode + "@2x.png";

            $("#icon").attr("src", iconUrl);

        }).fail(function () {
            alert("City not found");
        });

    });

});