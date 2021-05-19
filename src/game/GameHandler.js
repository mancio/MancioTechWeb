const textColor = '#ffffff';
const gameList = [
    {
        id: 6,
        title: 'Metal Slug',
        tag: 'metal',
        src: 'https://www.retrogames.cc/embed/9157-metal-slug-super-vehicle-001.html',
        gameWidth: 600,
        gameHeight: 450,
        frameBorder: 0,
        allowFullScreen: 'true',
        buttonColor: '#ff0000',
        textColor: textColor,
        svgWidth: 250,
        svgHeight: 55,
    },
    {
        id: 7,
        title: 'Super Mario Kart',
        tag: 'mariokart',
        src: 'https://www.retrogames.cc/embed/18635-super-mario-kart-usa-hack-by-ok-impala-v1-0-super-mario-kart-the-impala-battles-custom-battle-tracks.html',
        gameWidth: 600,
        gameHeight: 450,
        frameBorder: 0,
        allowFullScreen: 'true',
        buttonColor: '#ff0000',
        textColor: textColor,
        svgWidth: 250,
        svgHeight: 55,
    },
    {
        id: 8,
        title: 'Tekken 3',
        tag: 'tk3',
        src: 'https://www.retrogames.cc/embed/40238-tekken-3.html',
        gameWidth: 600,
        gameHeight: 450,
        frameBorder: 0,
        allowFullScreen: 'true',
        buttonColor: '#ff0000',
        textColor: textColor,
        svgWidth: 250,
        svgHeight: 55,
    },
    {
        id: 9,
        title: 'Bloody Roar 2',
        tag: 'blr2',
        src: 'https://www.retrogames.cc/embed/41623-bloody-roar-2-bringer-of-new-age.html',
        gameWidth: 600,
        gameHeight: 450,
        frameBorder: 0,
        allowFullScreen: 'true',
        buttonColor: '#ff0000',
        textColor: textColor,
        svgWidth: 250,
        svgHeight: 55,
    },
    {
        id: 10,
        title: 'Captain Tsubasa',
        tag: 'tsubasa',
        src: 'https://www.retrogames.cc/embed/41646-captain-tsubasa-j-get-in-the-tomorrow.html',
        gameWidth: 600,
        gameHeight: 450,
        frameBorder: 0,
        allowFullScreen: 'true',
        buttonColor: '#ff0000',
        textColor: textColor,
        svgWidth: 250,
        svgHeight: 55,
    },
    {
        id: 11,
        title: 'Carmageddon',
        tag: 'carma',
        src: 'https://www.retrogames.cc/embed/41647-carmageddon.html',
        gameWidth: 600,
        gameHeight: 450,
        frameBorder: 0,
        allowFullScreen: 'true',
        buttonColor: '#ff0000',
        textColor: textColor,
        svgWidth: 250,
        svgHeight: 55,
    },
    {
        id: 12,
        title: 'McRae Rally 2',
        tag: 'colin2',
        src: 'https://www.retrogames.cc/embed/41669-colin-mcrae-rally-2.html',
        gameWidth: 600,
        gameHeight: 450,
        frameBorder: 0,
        allowFullScreen: 'true',
        buttonColor: '#ff0000',
        textColor: textColor,
        svgWidth: 250,
        svgHeight: 55,
    }



];

let tagGameSelected = '';

export const getCurrentGameTag = function (){
    return tagGameSelected;
}

export const setCurrentGameTag = function (tag){
    tagGameSelected = tag;
}

export const getGameList = function (){
    return gameList;
}

export const getRandomGame = function (){
    const listSize = gameList.length;
    // get a number between zero and listSize
    const randNumber = Math.floor(Math.random() * (listSize + 1));
    return gameList[randNumber];
}

export const getGameByTag = function (tag){
    return gameList.find((item) => item.tag === tag);
}