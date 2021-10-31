export const replaceHtmlCharacters = function (string){
    return string.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec);
    });
}

export const uriToYouTube = function (string){
    return encodeURI(string).replace(/&/gi,'%26');
}