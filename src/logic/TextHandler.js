const conversionMap = {
    '&#039;': "'",
    '&quot;': '"',
    '&pi;': 'pi'
    // add here all characters you want to replace
}

export const replaceSpecialCharacters = function (string){
    return string.replace(/&#?\w+;/gi, match => conversionMap[match]);
}