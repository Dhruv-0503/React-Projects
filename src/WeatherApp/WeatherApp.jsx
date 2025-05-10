import React, { useState } from 'react'
import './WeatherApp.css'

const api = {
    key: "e0d04fe949f9c488fbd779c32f6b65ab",
    base: "https://api.openweathermap.org/data/2.5/"
};
function WeatherApp() {
    const [location, setLocation] = useState('');
    const [weather, setWeather] = useState({})

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(data => {
                    setWeather(data);
                    setLocation('');
                    console.log(data);
                })
        }
    }

    const dateBuilder = (d) => {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const days = [
            "Sunday", "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday"
        ];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day}, ${date} ${month} ${year}`;
    }

    return (
        <div>
            <main>
                <div className="searchbox">
                    <input type="text" value={location} placeholder='Search...' className='searchbar' onChange={(e) => setLocation(e.target.value)} onKeyPress={search} />
                </div>
                {(typeof weather.main != "undefined") ? (
                    <div className='app-content'>
                        <div className="locationbox">
                            <div className="location">
                                {weather.name}, {weather.sys.country}
                            </div>
                            <div className="currdate">
                                {dateBuilder(new Date())}
                            </div>
                        </div>

                        <div className="weatherbox">
                            <div className="location-temp">
                                {Math.round(weather.main.temp)}°C
                            </div>
                            <div className="location-weather">
                                {weather.weather[0].main}
                            </div>
                        </div>
                    </div>
                ) : ('')}
            </main>
        </div>
    )
}

export default WeatherApp


