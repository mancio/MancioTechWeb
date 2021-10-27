const conversionMap = {
    '&#039;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&pi;': 'pi'
    // add here all characters you want to replace
}

export const replaceSpecialCharacters = function (string){
    // return string.replace(/&#?\w+;/gi, match => conversionMap[match]);
    return string;
}

export const replaceSpaceWithPlus = function (string){
    return string.replace(/\s/g, '+');
}