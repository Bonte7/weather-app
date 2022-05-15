import React from 'react';

function Forecast(props) {

    let mappedData = props.forecastData.map((item, index) => {
            return (
                <div onClick={props.handleClick} key={item.dt} 
                    className={
                        `forecast-card ${props.isActive === item.dt_txt && !props.checkClass.includes('blue-card')  ? "blue-card" : ""}`
                        } 
                    id={item.dt_txt} value={index}
                >
                    <p>{item.dt_txt.slice(5, 10)}</p>
                    <div className="forecast-conditions">
                        <img alt="weather" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}></img>
                        <p>{Math.round(item.main.temp)} &deg;F</p>
                    </div>
                    
                    <p className="forecast-humidity">Humidity:</p>
                    <p>{item.main.humidity}%</p>
                </div>
            )
        })


    return (
        <div className="weather-forecast">
            {mappedData}    
        </div>
    )
}

export default Forecast;