import React from 'react';

function CurrentWeather(props) {

    return (
        <div className="current-weather-container">
            <div className="current-weather">
            {props.icon ? 
                <img className="weather-icon" alt="weather-img" src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}></img>
                :
                null
            }
                <p className="temp">{props.temp} &deg;F</p>
            </div>
        <h2 className="condition">{props.weather}</h2>
      </div>
    )
}

export default CurrentWeather;