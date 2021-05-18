const webcam = [
    {
        src: 'https://lookcam.live/player/doXZMoY5Kj/',
        width: 500,
        height: 300,
        frameBorder: 0,
        allowFullScreen: 'true',
        tag: 'bird'
    },
    {
        src: 'https://lookcam.live/player/O9JPLY0Ul0/',
        width: 500,
        height: 300,
        frameBorder: 0,
        allowFullScreen: 'true',
        tag: 'bird'
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

export const getGameByTag = function (tag){
    return webcam.find((item) => item.tag === tag);
}