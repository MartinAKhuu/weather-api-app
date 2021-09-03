import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateCity } from '../redux/actions';

const WeatherForm = ({ onUpdatePressed }) => {
    const [inputValue, setInputValue] = useState('');

    function handleChange() {
        onUpdatePressed(inputValue);
        setInputValue('');
    }

    return (
        <div className="weather-form">
            <div className="row g-0">
                <div className="col-sm-9">
                    <input
                        id="weather-input"
                        type="text"
                        placeholder="Please enter a city"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)} />
                </div>
                <div className="col-sm-3">
                    <button onClick={handleChange}>Update City</button>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    onUpdatePressed: text => dispatch(updateCity(text)),
});

export default connect(null, mapDispatchToProps)(WeatherForm);