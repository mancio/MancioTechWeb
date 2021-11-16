import './ButtonTemplate.css';
import SelectIcon from "./icon/SelectIcon";
import {useHistory} from "react-router-dom";
import {getRandomCamTag} from "../webcam/WebCamHandler";



function ButtonTemplate(props) {


    const history = useHistory();

    function clicked(){
        const page = props.tag;
        switch (page){
            case 'index':
                history.push('/');
                break;
            case 'menu':
                history.push('/menu');
                break;
            case 'design':
                history.push('/design');
                break;
            case 'story':
                history.push('/mystory');
                break;
            case 'contact':
                history.push('/contact');
                break;
            case 'game':
                history.push('/gamelist');
                break;
            case 'trivial':
                history.push('/trivial');
                break;
            case 'cam':
                history.push('/webcams/' + getRandomCamTag());
                break;
            case 'tv':
                history.push('/enterTvLink');
                break;
            case 'platform':
                history.push('/filmseries/selectplatform');
                break;
            case 'netflix':
                history.push('/filmseries/filter/netflix');
                break;
            case 'hbo':
                history.push('/filmseries/filter/hbo');
                break;
            case 'prime':
                history.push('/filmseries/filter/prime');
                break;
            case 'themoviedb':
                history.push('/filmseries/filter/themoviedb');
                break;
            case 'weather':
                history.push('/weather');
                break;
            case 'recipes':
                history.push('/recipes');
                break;
            case 'fart':
                history.push('/fartIsFun');
                break;
            case 'alwayson':
                history.push('/alwaysOn');
                break;
            case 'scorecounter':
                history.push('/scoreCounter');
                break;
            case 'back':
                history.goBack();
                break;
            default:
                history.push('/boo');
                break;
        }

    }

    return(
        <div className='list'>
            <SelectIcon name={props.icon} iconColor={props.iconColor}/>
            <button id={props.id} className='menu-button' onClick={clicked}>
                <svg className='design-button' xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}>
                    <rect width={props.width} height={props.height} rx="27.5" fill={props.svgColor}/>
                    <text  x="50%" y="60%" className='button-text' dominantBaseline="middle" textAnchor="middle" fill={props.textColor} stroke="rgba(0,0,0,0)" strokeWidth="1" fontSize="25" letterSpacing="0.04em">{props.textField}</text>
                </svg>
            </button>
        </div>
    );

}

export default ButtonTemplate;