 import './WeatherForecast.css';

function WeatherForecast(props){
    return (
        <div className="weather">
            <h2>{props.weather.day}</h2>
            <img src={props.weather.img} alt="" />
            <p><span>conditions: {props.weather.conditions} </span>current weather conditions</p>
            <p><span>time: {props.weather.time} </span>time of day</p>
          </div> 
    )
}

export default WeatherForecast