
import './Weather.css';
import {getCities} from "./WeatherHandler";
import City from "./City";

export default function Weather(){

    const cities = getCities();

    return(
        <div>
            <h1 className='weather-title'>How is going in my favourite places?</h1>
            {cities.map(city => {
                return(
                    <City
                        lat = {city.lat}
                        lon = {city.lon}
                        name = {city.name}
                    />
                )
            })}
        </div>
    )
}