import React from "react"

const form = props => (
    <form className="form-container" onSubmit={props.getWeather}>
        <h1 className="title-container"> <a href="https://github.com/gaurav147-star/Weather-app" target="_blank" rel="noopener noreferrer">Weather Information</a></h1>
        <input className="city-container" styles="color: #fff" type="text" name="city" placeholder="Enter city" />
        <input className="country-container" type="text" name="country" defaultValue="IN" placeholder="Enter country" />
        <button>Get Weather</button>
    
    </form>
);

export default form;