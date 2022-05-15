import React from 'react'

function Conditions(props) {
    return (
        <div className="extra-data">
            <div className="humidity">
                <h3 className="extra-data-title">Humidity</h3>
                <p>{props.humidity}%</p>
            </div>
            <div className="wind-speed">
                <h3 className="extra-data-title">Wind Speed</h3>
                <p>{props.windSpeed} mph</p>
            </div>
            
        </div>
    )
}

export default Conditions;