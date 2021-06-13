import parser from 'iptv-playlist-parser'

export const getTextFromLink = async function (link) {
    const res = await fetch(link);
    const body = await res.text();
    if(body !== undefined) return body;
    return 'error';

}

export const setParsedTvList = async function (link) {
    const playlist = await getTextFromLink(link);
    const jsonTvListItemsAsString = JSON.stringify(parser.parse(playlist).items);
    localStorage.setItem('tvListItems',jsonTvListItemsAsString);
}

let fileReader;

const handleFileRead = function (){
    const playlist = fileReader.result;
    console.log(playlist)
    const jsonTvList = JSON.stringify(parser.parse(playlist).items);
    localStorage.setItem('tvListItems', jsonTvList);
}

export const setParsedFileTvList = async function (file){
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
}

export const getParsedTvList = function (){
    return JSON.parse(localStorage.getItem('tvListItems'));
}

export const getTvUrlByIndex = function (id){
    const list = JSON.parse(localStorage.getItem('tvListItems'));
    return list[id].url;
}