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

export const getParsedTvList = function (){
    return JSON.parse(localStorage.getItem('tvListItems'));
}