import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';

import WeatherCard from './WeatherCard';
import WeatherForm from './WeatherForm';

import key from '../key.js';

const WeatherApp = ({ city }) => {

    const loaderType = "spin";
    const loaderColor = "#333";

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +
            "&units=metric&appid=" + key)
            .then(function (response) {
                setLoading(true);
                if (!response.ok) {
                    window.alert("Please enter a valid city name");
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(function (response) {
                setData(response);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [city]);

    return (
        <>
            <WeatherForm />
            {loading ? <ReactLoading className="react-loader" color={loaderColor} type={loaderType} /> : <WeatherCard data={data} />}
        </>
    );
}

const mapStateToProps = state => ({
    city: state.weather.city
});

export default connect(mapStateToProps)(WeatherApp);