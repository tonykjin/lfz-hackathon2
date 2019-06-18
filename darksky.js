$(document).ready(initializeApp);
        function initializeApp() {
            $.ajax(weatherInfo);
        }
        function handleDataReceived(response) { //server response to the client
            // debugger;
            console.log(response);
            var temperature = $('<div>').text("It is currently " +response.currently.temperature+ "°F");
            var currentSummary = $('<div>').text("Current summary: " +response.currently.summary);
            // var icon = $('<div>').text(response.currently.icon);
            var minuteSummary = $('<div>').text("Minutely summary: " +response.minutely.summary);
            var hourSummary = $('<div>').text("Hourly summary: " +response.hourly.summary);
            var daySummary = $('<div>').text("Daily summary: " +response.daily.summary);
            // var getWeatherBtn = $('<button>').text("Update Weather");
            
        // function convertTime(unixTime) {
        //         var dt = new Date(unixTime*1000);
        //         var hr = dt.getHours();
        //         var m = "0" + dt.getMinutes();
        //         var s = "0" + dt.getSeconds();
        //         return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
        //     }
        //     var time = $('<div>').text(convertTime(unixTime));   
            // var time = $('<div>').text(response.currently.time);   

            // $('body').append(time);
            $('body').append(temperature);
            $('body').append(currentSummary);
            $('body').append(minuteSummary);
            $('body').append(hourSummary);
            $('body').append(daySummary);
            // $('body').append(getWeatherBtn);
            // getWeatherBtn.on("click", handleDataReceived);
            // $('body').append(icon);

        }
        var weatherInfo = {
            url: 'https://api.darksky.net/forecast/5f2668d63b042969dc1581b9d2250cee/33.684566,-117.826508?exclude=alerts,flags?units=auto',
            method: 'get',
            dataType: 'jsonp',
            success: handleDataReceived  
        }
Collapse




Message Input


Message Raul Jauregui, Brady Greco, Kyle Apostol