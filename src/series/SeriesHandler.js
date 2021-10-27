import {idPlusPlus} from "../logic/Counter";
import axios from "axios";
import {unogRapidHost, rapidKey, strAvalHost} from "../passwords/MoviePasswords";

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

const netflix_options = {
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
        'x-rapidapi-host': unogRapidHost,
        'x-rapidapi-key': rapidKey
    }
};

let others_options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/search/basic',
    params: {
        country: 'pl',
        service: 'prime',
        type: '',
        page: '1',
        output_language: 'en',
        language: 'en'
    },
    headers: {
        'x-rapidapi-host': strAvalHost,
        'x-rapidapi-key': rapidKey,
        'Content-Type': 'application/json'
    }
};

export let movies = [];
export let series = [];

export const clearMediaArrays = function (){
    movies.length = 0;
    series.length = 0;
}

export const searchNetflixMedia = function (){
    clearMediaArrays();
    return axios.request(netflix_options).then(r => {
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

export const searchOtherMedia = function (platform, country){
    // clearMediaArrays();
    if(platform === 'prime') others_options.params.service = 'prime';
    if(platform === 'hbo') others_options.params.service = 'hbo';
    others_options.params.country = country;

    others_options.params.type = 'series';

    return axios.request(others_options).then(ser => {
        ser.data.result.filter(s => {
            series.push(s);
            return 'ok';
        })
        console.log(series);
        others_options.params.type = 'movie';
        axios.request(others_options).then(mov => {
            mov.data.result.filter(m => {
                series.push(m);
                return 'ok';
            })
        })
    })
    .catch(function (error) {
        console.error(error);
    });
}

export const paraMatch = function (media, platform){
    if(platform === 'netflix') {
        return {
            id: media.id,
            title: media.title,
            year: media.year,
            img: media.img,
            desc: media.synopsis,
            rating: media.imdbrating
        }
    }
    else {
        return {
            id: media.tmdbID,
            title: media.originalTitle,
            year: media.year,
            img: media.backdropPath,
            desc: media.overview,
            rating: media.imdbRating
        }
    }
}