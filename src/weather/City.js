import ReactWeather, { useOpenWeather } from 'react-open-weather';
import {getKey} from "./WeatherHandler";

export default function City() {

    const {data, isLoading, errorMessage} = useOpenWeather({
        key: getKey(),
        lat: props.lat,
        lon: props.lon,
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
    });

    return(
        <div>
            <ReactWeather
                isLoading={isLoading}
                errorMessage={errorMessage}
                data={data}
                lang="en"
                locationLabel={props.name}
                unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                showForecast
            />
        </div>
    )

}

