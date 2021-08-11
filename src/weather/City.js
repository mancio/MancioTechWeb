import {useEffect, useState} from "react";
import {getTodayWeather} from "./WeatherHandler";
import { Card } from 'semantic-ui-react'

export default function City(props){

    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const cityName = props.name;



    useEffect((props) => {
        setLoaded(true);
        async function fetchData() {
            const res = await getTodayWeather(cityName);
            setData(res);
        }
        fetchData();
    },[loaded])


    return(
        <div id={props.id}>
            {(typeof data.main != 'undefined') ? (
                <Card>
                    <Card.Content>
                        <Card.Header className="header">City Name: {data.name}</Card.Header>
                        <p>Temperature: {data.main.temp}</p>
                        <p>Sunrise: {data.sys.sunrise}</p>
                        <p>Sunset: {data.sys.sunset}</p>
                        <p>Description: {data.weather[0].description}</p>
                    </Card.Content>
                </Card>
            ): (
                <div> <p> Data not found </p> </div>
            )}
        </div>
    )
}
