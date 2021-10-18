import './TimeNow.css';
import {addSecToUnixTime, getMyIP, getRealTime, getGeoInfo} from "./TimeNowHandler";
import {useEffect, useState} from "react";

export default function TimeNow(){

    const [ip, setIp] = useState('0');
    const [time, setTime] = useState('0');
    const [city, setCity] = useState('null');
    const [country, setCountry] = useState('null');

    useEffect(() => {
        if (ip === '0') getMyIP().then(r => setIp(r));
        if (ip !== '0' && time === '0') getGeoInfo(ip).then(geo => {
            setTime(geo.time);
            setCity(geo.city);
            setCountry(geo.country);
        });
        if (time !== '0'){
            setTimeout(()=>{
                setTime(addSecToUnixTime(time));
            },1000);
        }
    },[ip, time, city, country]);

    return(
        <div>
            <p>
                {time === '0' ? 'time updating' : getRealTime(time)} in
                your city {city} in {country}
            </p>
        </div>
    )
}