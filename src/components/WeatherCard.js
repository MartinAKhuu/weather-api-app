import React from 'react';
import getCorrectGif from './utils/getCorrectGif';

const WeatherCard = ({ data }) => {

    let capitalize = text => {
        return (typeof text !== 'string') ? '' : text.charAt(0).toUpperCase() + text.slice(1);
    }

    if (data) {
        return (
            <div className="weather-card">
                <div className="row align-items-center" >
                    <div className="col-6">
                        <div className="p-4">
                            <div>{data.name}, {data.sys.country}</div>
                            <div className="display-4">{data.main.temp}&nbsp;°C</div>
                            <div>Feels like: {data.main.feels_like} °C</div>
                            <div>{capitalize(data.weather[0].description)}</div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img className="img-fluid" src={
                            getCorrectGif(data.weather[0].icon)
                        } alt={data.weather[0].description} />
                    </div>
                </div>
            </div>
        );
    } else {
        return <h1>Loading JSON</h1>
    }
}

export default WeatherCard;