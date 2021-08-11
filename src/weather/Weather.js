import './Weather.css';
import City from "./City";
import {cities} from "./WeatherHandler";

export default function Weather(){

    let id = -1;

    return(
        <div>
            <h1 className='weather-title'>How is going in my favourite places?</h1>
            {cities.map(city => {
                console.log(city)
                const currentId = id++;
                return(
                    <City
                        name={city}
                        id={currentId}
                        key={currentId}
                    />
                )
            })}
        </div>
    )
}