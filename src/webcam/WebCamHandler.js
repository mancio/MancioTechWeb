const webcam = [
    {
        src: 'https://lookcam.live/player/doXZMoY5Kj/',
        width: 500,
        height: 300,
        frameBorder: 0,
        allowFullScreen: 'true',
        tag: 'bird'
    }
];

export const getWebCamList = function (){
    return webcam;
}

export const getGameByTag = function (tag){
    return webcam.find((item) => item.tag === tag);
}