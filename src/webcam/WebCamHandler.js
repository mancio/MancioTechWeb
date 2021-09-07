const webcam = [
    {
        src: 'https://lookcam.live/player/doXZMoY5Kj/',
        title: 'Kozubian region - stork asylum - a nest on a pole',
        country: 'Poland',
        width: 500,
        height: 300,
        frameBorder: 0,
        allowFullScreen: 'true',
        tag: 'bird'
    },
    {
        src: 'https://imageserver.webcamera.pl/rec/tyrawa-woloska/latest.mp4',
        title: 'Tyrawa Wołoska - gniazdo bociana',
        country: 'Poland',
        width: 500,
        height: 300,
        frameBorder: 0,
        allowFullScreen: 'true',
        tag: 'bird_tyrawa'
    },
    {
        src: 'https://imageserver.webcamera.pl/rec/klekusiowo/latest.mp4',
        title: 'Klekusiowo - widok na gniazdo bociana białego',
        country: 'Poland',
        width: 500,
        height: 300,
        frameBorder: 0,
        allowFullScreen: 'true',
        tag: 'bird_kle'
    },
    {
        src: 'https://imageserver.webcamera.pl/rec/pszczoly/latest.mp4',
        title: 'Pszczoły na żywo Warsawa',
        country: 'Poland',
        width: 500,
        height: 300,
        frameBorder: 0,
        allowFullScreen: 'true',
        tag: 'api'
    },
    {
        src: 'https://lookcam.live/player/R3ndmpR8Rw/',
        title: 'Zakopane - ul. Krupówki',
        country: 'Poland',
        width: 500,
        height: 300,
        frameBorder: 0,
        allowFullScreen: 'true',
        tag: 'zakopane'
    },
    {
        src: 'https://player.nadmorski24.pl/_camera2.php?id=4',
        title: 'Białogóra Plaża',
        country: 'Poland',
        width: 500,
        height: 300,
        frameBorder: 0,
        allowFullScreen: 'true',
        tag: 'bia'
    },
    {
        src: 'https://player.nadmorski24.pl/_camera2.php?id=3',
        title: 'Gdańsk Stare Miasto',
        country: 'Poland',
        width: 500,
        height: 300,
        frameBorder: 0,
        allowFullScreen: 'true',
        tag: 'gdansk_miasto'
    },
    {
        src: 'https://lookcam.live/player/KOU3nIf12u/',
        title: 'Władysławowo - view of the Hel Peninsula',
        country: 'Poland',
        width: 500,
        height: 300,
        frameBorder: 0,
        allowFullScreen: 'true',
        tag: 'wowo'
    },
    {
        src: 'https://lookcam.live/player/s3GSU1AYRM/',
        title: 'Gdańsk - National Sailing Centre',
        country: 'Poland',
        width: 500,
        height: 300,
        frameBorder: 0,
        allowFullScreen: 'true',
        tag: 'gdansk'
    },
    {
        src: 'https://colrodella.panomax.com',
        title: 'Campitello di fassa - Col Rodella',
        country: 'Poland',
        width: 500,
        height: 300,
        frameBorder: 0,
        allowFullScreen: 'true',
        tag: 'campi'
    },
    {
        src: 'https://lookcam.live/player/MkpBtMYG6E/',
        title: 'Fiddlers - squirrel aviary',
        country: 'Where?',
        width: 500,
        height: 300,
        frameBorder: 0,
        allowFullScreen: 'true',
        tag: 'squirrels'
    },
    {
        src: 'https://content.jwplatform.com/previews/meoYAvxh-Ov8ubaf2',
        title: 'Panda Cam',
        country: 'Somewhere in the world',
        width: 500,
        height: 300,
        frameBorder: 0,
        allowFullScreen: 'true',
        tag: 'panda'
    }
];

let currentWebCamPos = 0

export const setAnotherWebCam = function (direction){
    if(direction === '0') currentWebCamPos++;
    if(direction === '180') currentWebCamPos--;
    currentWebCamPos = Math.abs(currentWebCamPos%webcam.length);
    console.log('current webcam: ' + currentWebCamPos);
}

export const getCurrentWebCam = function (){
    console.log('current webcam requested: ' + webcam[currentWebCamPos]);
    return webcam[currentWebCamPos];
}

export const getWebCamList = function (){
    return webcam;
}

export const getCamByTag = function (tag){
    return webcam.find((item) => item.tag === tag);
}

export const getRandomCamTag = function (){
    let rand = Math.floor(Math.random() * webcam.length);
    return webcam[rand].tag;
}