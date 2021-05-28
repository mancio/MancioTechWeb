import {idPlusPlus} from "../logic/Counter";

const textColor = '#ffffff';

const platformButtons = [
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#bd1414',
        textColor: textColor,
        textField:'NETFLIX',
        icon: 'TV',
        iconColor: '#bd1414',
        tag: 'netflix'
    },
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#1224cd',
        textColor: textColor,
        textField:'HBO GO PL',
        icon: 'TV',
        iconColor: '#1224cd',
        tag: 'hbo'
    },
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#ffa200',
        textColor: textColor,
        textField:'PRIME IT',
        icon: 'TV',
        iconColor: '#ffa200',
        tag: 'prime'
    }
]

export const getMoviePlatformMenu = function (){
    return platformButtons;
}