import './TimeNow.css';
import {getMyIP} from "./TimeNowHandler";
import {useEffect, useState} from "react";

export default function TimeNow(){

    const [ip, setIp] = useState('ppp');

    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then(r => r.json())
            .then(d => {
                console.log(d.ip);
                setIp(d.ip);
            }).catch(err => console.log(err));
    },[ip]);

    return(
        <div>
            <p>{ip}</p>
        </div>
    )
}