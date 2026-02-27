import fetch from 'node-fetch';
const API_KEY = 'c451cebcbeca3b47f95a3ca000f8637d';

const city = 'Pokhara,NP';

const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const forecast = data.list;

        const tempList = forecast.map(item => ({
            time: item.dt_txt,
            temp: item.main.temp
          }));

          console.log("\nTemperature List:");
          console.log(tempList.slice(0,8));

          const warmTimes = forecast.filter(item => item.main.temp > 20);
          console.log(`\,Warn period (> 20°C): ${warmTimes.length}`);
          
          const avgTemp = forecast.reduce((sum, item) =>
        sum + item.main.temp, 0) / forecast.length;

          console.log("\nAverage Temperature:", avgTemp.toFixed(2), "°C");
           })
.catch(error => console.log("Error:", error));           