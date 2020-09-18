        

        document.getElementById('button-addon2').addEventListener('click', function(){
            let cityValue = document.getElementById('city-value').value;
            getResult(cityValue);
        })



        function getResult(city){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=1ae7498b1040546a1c3c94750dc636ba`)
            .then(response => response.json())
            .then(data => {
                display(data);
            })
        }

        

        function display(data){

            document.getElementById('weather-icon').innerHTML = `<img id="weather-icon" class="mx-auto d-block weather-icon" src="images/icon.png" alt="">`;

            document.getElementById('city').innerHTML = `${data.name}, ${data.sys.country}`;
            


            let day = new Date();
            document.getElementById('day').innerHTML = buildDay(day);

            document.getElementById('temperature').innerHTML = `${Math.round(data.main.temp)} °C`;

            document.getElementById('weather').innerHTML = `${data.weather[0].main}`;         
            
        }
        


        function buildDay(day) {
            let allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let allDay = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];


            let nowDay = allDay[day.getDay()];
            let nowDate = day.getDate();    
            let nowMonth = allMonths[day.getMonth()];

            return `${nowDay} ${nowDate}, ${nowMonth}`;
    
        }

      