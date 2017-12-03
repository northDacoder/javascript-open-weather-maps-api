$(document).ready(function () {


    // Get weather in San Francisco, CA
    $("#getWeatherSF").click(function () {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?appid=0d6f61476549a0d3895b89a0b31fa966&q=san%20francisco",
            success: function (theWeather) {
                var kelvin = theWeather.main.temp;
                var far = 1.8 * (kelvin - 273.15) + 32;
                far = Math.round(far);
                $("#resultsSF").text("Fahrenheit:   " + far + " Degrees");
            }
        });
        $('#results').text('Getting Weather, one moment please...');
    });



    // Get weather in Grand Forks, ND
    $("#getWeatherGF").click(function () {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?appid=0d6f61476549a0d3895b89a0b31fa966&q=grand%20forks",
            success: function (theWeather) {
                var kelvin = theWeather.main.temp;
                var far = 1.8 * (kelvin - 273.15) + 32;
                far = Math.round(far);
                if (far < 0) {
                    $("#resultsGF").addClass('blue');
                    $("#resultsGF").text("Fahrenheit:   " + far + " Degrees, It's too f*&^ing cold where you live!!");
                } else {
                    $("#resultsGF").text("Fahrenheit:   " + far + " Degrees");
                }
            }
        });
        $('#results').text('Getting Weather, one moment please...');
    });



    // Get weather in Minneapolis, MN
    $("#getWeatherMSP").click(function () {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?appid=0d6f61476549a0d3895b89a0b31fa966&q=minneapolis",
            success: function (theWeather) {
                var kelvin = theWeather.main.temp;
                var far = 1.8 * (kelvin - 273.15) + 32;
                far = Math.round(far);
                if (far < 0) {
                    $("#resultsMSP").addClass('blue');
                    $("#resultsMSP").text("Fahrenheit:   " + far + " Degrees  It's too f*&^ing cold where you live!!");
                } else {
                    $("#resultsMSP").text("Fahrenheit:   " + far + " Degrees");
                }
            }
        });
        $('#results').text('Getting Weather, one moment please...');
    });



    // Get weather in Palo Alto, CA
    $("#getWeatherPA").click(function () {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?appid=0d6f61476549a0d3895b89a0b31fa966&q=Palo Alto",
            success: function (theWeather) {
                // var weatherString = JSON.stringify(theWeather); 
                var kelvin = theWeather.main.temp;
                var far = 1.8 * (kelvin - 273.15) + 32;
                far = Math.round(far);
                $("#resultsPA").text("Fahrenheit:   " + far + " Degrees");
            },
        });
        $('#results').text('Getting Weather, one moment please...');
    });
});







/* $("#inputCity").keydown(function (event) {
        if (event.keyCode === 13) {
            var userCity = $("#inputCity").val();
            console.log(userCity);
            var urlMessage = "http://api.openweathermap.org/data/2.5/weather?appid=0d6f61476549a0d3895b89a0b31fa966&q=";
            urlMessage += userCity;
            console.log("API URL TO CALL: " + urlMessage);
            $("#").trigger('click');
        }
    });*/
