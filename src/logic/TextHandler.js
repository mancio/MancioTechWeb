export const replaceHtmlCharacters = function (string){
    return string.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec);
    })
        .replace(/&quot;/g, '')
        .replace(/&eacute;/g, 'é')
        .replace(/&amp;/g, '"')
        .replace(/&ldquo;/g, '"')
        .replace(/&rdquo;/g, '"')
        .replace(/&shy;/g, '-');
}

export const uriToYouTube = function (string){
    return encodeURI(string).replace(/&/gi,'%26');
}

export const newLine = function (){
    return "\n";
}

export const tab = function (){
    return "\t";
}

export const copyTextToClipBoard = function (text){
    return navigator.clipboard.writeText(text);
}