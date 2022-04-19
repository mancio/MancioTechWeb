const webcam = [
    {
        src: 'https://www.youtube.com/embed/9UrWCJPSa24',
        title: 'Bociany Ustroń – transmisja na żywo',
        country: 'Poland',
        tag: 'bird_ustron'
    },
    {
        src: 'https://www.youtube.com/embed/-Z4W0iltQ5U',
        title: 'LEŚNY ZAKĄTEK A forest nook for birds and wild animals - live camera',
        country: 'Poland',
        tag: 'bird_lesny'
    },
    {
        src: 'https://www.youtube.com/embed/MtGUTs_HgcE',
        title: 'LIVE [4K] Backyard Bird Feeder Camera! (*Cardinals, Jays, Chickadees*)',
        country: 'OHIO - USA',
        tag: 'bird_feeder'
    },
    {
        src: 'https://www.youtube.com/embed/sqOmhBGk-tY',
        title: 'Deer Pantry "Ryan\'s Bird Buffet',
        country: 'Brownville - USA',
        tag: 'bird_buffet'
    },
    {
        src: 'https://www.youtube.com/embed/dc2xQYSsOjA',
        title: 'PixCams.com Wildlife Cam 2 Live Stream',
        country: 'USA',
        tag: 'bird_pix'
    },
    {
        src: 'https://www.youtube.com/embed/dc2xQYSsOjA',
        title: 'PixCams.com Wildlife Cam 2 Live Stream',
        country: 'Southwestern Pennsylvania, USA',
        tag: 'bird_pix'
    },
    {
        src: 'https://www.youtube.com/embed/6x14VCXNV5w',
        title: 'Nuuksio live - winter birds feeding in South of Finland',
        country: 'Finland',
        tag: 'bird_Nuuksio'
    },
    {
        src: 'https://www.youtube.com/embed/oGoF97bOg7U',
        title: 'LIVE 24/7 Indiana Bird, Squirrel And Wildlife Feeder Cam',
        country: 'Indiana - USA',
        tag: 'bird_ind'
    },
    {
        src: 'https://www.youtube.com/embed/uE5CFNlUTG0',
        title: 'Gniazdo Bocianie - Telewizja Sokółka [NA ŻYWO] | IP Camera: Stork\'s nest [LIVE]',
        country: 'Poland',
        tag: 'bird_tel'
    },
    {
        src: 'https://imageserver.webcamera.pl/rec/tyrawa-woloska/latest.mp4',
        title: 'Tyrawa Wołoska - gniazdo bociana',
        country: 'Poland',
        tag: 'bird_tyrawa'
    },
    {
        src: 'https://imageserver.webcamera.pl/rec/klekusiowo/latest.mp4',
        title: 'Klekusiowo - widok na gniazdo bociana białego',
        country: 'Poland',
        tag: 'bird_kle'
    },
    {
        src: 'https://imageserver.webcamera.pl/rec/pszczoly/latest.mp4',
        title: 'Pszczoły na żywo Warsawa',
        country: 'Poland',
        tag: 'api'
    },
    {
        src: 'https://player.nadmorski24.pl/_camera2.php?id=4',
        title: 'Białogóra Plaża',
        tag: 'bia'
    },
    {
        src: 'https://player.nadmorski24.pl/_camera2.php?id=3',
        title: 'Gdańsk Stare Miasto',
        tag: 'gdansk_miasto'
    },
    {
        src: 'https://colrodella.panomax.com',
        title: 'Campitello di fassa - Col Rodella',
        country: 'Poland',
        tag: 'campi'
    },
    {
        src: 'https://lookcam.live/player/MkpBtMYG6E/',
        title: 'Fiddlers - squirrel aviary',
        country: 'Where?',
        tag: 'squirrels'
    },
    {
        src: 'https://content.jwplatform.com/previews/meoYAvxh-Ov8ubaf2',
        title: 'Panda Cam',
        country: 'Somewhere in the world',
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