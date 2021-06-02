import parser from 'iptv-playlist-parser'

export const getTextFromLink = async function (link) {
    const res = await fetch(link);
    const body = await res.text();
    if(body !== undefined) return body;
    return 'error';

}

let jsonTvList = '';

export const setParsedTvList = async function (link) {
    const playlist = await getTextFromLink(link);
    jsonTvList = parser.parse(playlist);
    console.log(jsonTvList);
}

export const getParsedTvList = function (){
    return jsonTvList;
}