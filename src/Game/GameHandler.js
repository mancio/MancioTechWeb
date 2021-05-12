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
        tag: 'marioKart',
        src: 'https://www.retrogames.cc/embed/18635-super-mario-kart-usa-hack-by-ok-impala-v1-0-super-mario-kart-the-impala-battles-custom-battle-tracks.html',
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