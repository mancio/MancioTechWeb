import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";
import {useParams} from "react-router-dom";
import './FilterSeries.css';
import {useState} from "react";
import {movies, searchNetflixMedia, series} from "./SeriesHandler";
import {replaceSpecialCharacters} from "../logic/TextHandler";

export default function FilterSeries(){

    const back = getMenuItemByTag('back');

    const [media, setMedia] = useState(null);
    const [requested, setRequested] = useState(false);

    const tag = useParams().tag;

    function click(type){
        if (tag === 'netflix' && !requested) {
            searchNetflixMedia().then(() =>{
                setRequested(true);
            })
        }
        setMedia(type);
    }

    return(
        <div className='filter-platform'>
            <h1>Search Best show on {tag.toUpperCase()}</h1>
            <button onClick={() => click('series')}>Series</button>
            <button onClick={() => click('movies')}>Movies</button>
            {
                (media === 'series' && requested) &&
                <>
                    <div>
                        <p>Series List</p>
                        {series.map(s => {return <>{replaceSpecialCharacters(s.title)} <br/></>})}
                    </div>
                </>
            }
            {
                (media === 'movies' && requested) && <>
                    <div>
                        <p>Movies List</p>
                        {movies.map(m => {return <>{replaceSpecialCharacters(m.title)} <br/></>})}
                    </div>
                </>
            }
            <ButtonTemplate
                key={back.id}
                id={back.id}
                width={back.width}
                height={back.height}
                svgColor={back.svgColor}
                textColor={back.textColor}
                textField={back.textField}
                icon={back.icon}
                iconColor={back.iconColor}
                tag='platform'
            />
        </div>
    )
}