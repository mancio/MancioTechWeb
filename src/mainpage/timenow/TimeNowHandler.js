import axios from "axios";
import {geoApiKey} from "../../passwords/GeoPassword";

export const getMyIP = async function (){
    return axios.get('https://api.ipify.org?format=json')
        .then(r => {
            console.log(r.data.ip);
            return r.data.ip;
        })
        .catch(error => {
            console.log(error);
            return '0';
        })
}

export const getGeoInfo = function (ip){
    return axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=' + geoApiKey + '&ip=' + ip)
        .then(r => {
            console.log(r);
            const time = r.data.time_zone.current_time_unix*1000;
            const city = r.data.city;
            const country = r.data.country_name;
            return {time, city, country};
        }).catch(error => {
            console.log(error);
        })
}

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric' ,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
};

export const getRealTime = function (unixTime){
    return new Date(unixTime).toLocaleDateString('en-GB', options);
}

export const addSecToUnixTime = function (unixTime){
    const date = new Date(unixTime);
    date.setSeconds(date.getSeconds()+1);
    return date.getTime();
}