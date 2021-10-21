import {idPlusPlus} from "../logic/Counter";
import axios from "axios";
import {rapidHost, rapidKey} from "../passwords/MoviePasswords";

const textColor = '#ffffff';

const platformButtons = [
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#bd1414',
        textColor: textColor,
        textField:'NETFLIX',
        icon: 'TV',
        iconColor: '#bd1414',
        tag: 'netflix'
    },
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#1224cd',
        textColor: textColor,
        textField:'HBO GO PL',
        icon: 'TV',
        iconColor: '#1224cd',
        tag: 'hbo'
    },
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#ffa200',
        textColor: textColor,
        textField:'PRIME IT',
        icon: 'TV',
        iconColor: '#ffa200',
        tag: 'prime'
    }
]

export const getMoviePlatformMenu = function (){
    return platformButtons;
}

const options = {
    method: 'GET',
    url: 'https://unogsng.p.rapidapi.com/search',
    params: {
        start_year: '2000',
        orderby: 'dateDesc',
        audiosubtitle_andor: 'and',
        start_rating: '7',
        limit: '100',
        subtitle: 'english',
        audio: 'english',
        offset: '0',
        end_year: '2021'
    },
    headers: {
        'x-rapidapi-host': rapidHost,
        'x-rapidapi-key': rapidKey
    }
};

export let movies = [];
export let series = [];

export const searchNetflixMedia = function (){
    return axios.request(options).then(r => {
        r.data.results.filter(m =>{
            if(m.vtype === 'movie') movies.push(m);
            else if (m.vtype === 'series') series.push(m);
            return 'ok';
        })
    })
    .catch(function (error) {
        console.error(error);
    });
}
