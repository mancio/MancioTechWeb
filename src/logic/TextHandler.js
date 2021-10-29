const conversionMap = {
    '&#039;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&pi;': 'pi'
    // add here all characters you want to replace
}

const youTubeMap = {

}

export const replaceSpecialCharacters = function (string){
    return string.replace(/&#?\w+;/gi, match => conversionMap[match])
        || string;
}

export const convertToYoutubeChar = function (string){
    return string.replace(/)
}

export const replaceSpaceWithPlus = function (string){
    return string.replace(/\s/g, '+');
}