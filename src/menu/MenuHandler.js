const textColor = '#000000';
const menu = [
    {
        id: 0,
        width:250,
        height:55,
        svgColor:'#00ff5f',
        textColor: textColor,
        textField:'SITE DESIGN',
        icon: 'TOOLS',
        iconColor: '#00ff5f',
        tag: 'design'
    },
    {
        id: 1,
        width:250,
        height:55,
        svgColor:'#f2fc00',
        textColor: textColor,
        textField:'MY STORY',
        icon: 'FACE',
        iconColor: '#f2fc00',
        tag: 'story'
    },
    {
        id: 2,
        width:250,
        height:55,
        svgColor:'#ff0000',
        textColor: textColor,
        textField:'MY PROJECTS',
        icon: 'CHIP',
        iconColor: '#ff0000',
        tag: 'projects'
    },
    {
        id: 3,
        width:250,
        height:55,
        svgColor:'#00ccfd',
        textColor: textColor,
        textField:'CONTACT ME',
        icon: 'MAIL',
        iconColor: '#00ccfd',
        tag: 'contact'
    },
    {
        id: 4,
        width:250,
        height:55,
        svgColor:'#F600FF',
        textColor: textColor,
        textField:'GAMES',
        icon: 'GAME',
        iconColor: '#f600ff',
        tag: 'game'
    },
    {
        id: 5,
        width:250,
        height:55,
        svgColor:'#FF6F00',
        textColor: textColor,
        textField:'WEB CAMS',
        icon: 'CAM',
        iconColor: '#FF6F00',
        tag: 'cam'
    },
    {
        id: 6,
        width:250,
        height:55,
        svgColor:'#ffffff',
        textColor: textColor,
        textField:'TV / RADIO',
        icon: 'TV',
        iconColor: '#ffffff',
        tag: 'tv'
    },
    {
        id: 7,
        width:250,
        height:55,
        svgColor:'#F600FF',
        textColor: textColor,
        textField:'GO BACK',
        icon: 'BACK',
        iconColor: '#f600ff',
        tag: 'back'
    }


];

export const getMenuItemByTag = function (tag){
        return menu.find((item) => item.tag === tag);
    }

export const getFullMenu = function (){
    return menu;
}

export const getMenuNoBack = function (){
    return menu.filter((item) => item.tag !== 'back');
}

