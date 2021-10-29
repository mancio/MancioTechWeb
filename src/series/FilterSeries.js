import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";
import {useParams} from "react-router-dom";
import './FilterSeries.css';
import {useState} from "react";
import {movies, paraMatch, searchNetflixMedia, searchOtherMedia, series} from "./SeriesHandler";
import {replaceSpaceWithPlus, replaceSpecialCharacters} from "../logic/TextHandler";
import {Card, ListGroup} from "react-bootstrap";

export default function FilterSeries(){

    const back = getMenuItemByTag('back');

    const [media, setMedia] = useState(null);
    const [requested, setRequested] = useState(false);
    const [ready, setReady] = useState(false);

    const tag = useParams().tag;

    function getDone(){
        setReady(true);
        setRequested(false);
    }

    function printError(){
        document.getElementById('media-error')
            .insertAdjacentHTML('afterend', '<div><p>Unable to get results, please try later</p></div>');

    }

    function click(type){
        setRequested(true);
        if (tag === 'netflix' && !ready) {
            searchNetflixMedia().then(() => getDone());
        }
        if (tag === 'prime' && !ready) {
            searchOtherMedia(tag, 'pl')
                .then(() => {
                    getDone();
                })
                .catch(()=> printError());
        }
        if (tag === 'hbo' && !ready) {
            searchOtherMedia(tag,'us').then(() => getDone())
                .catch(() => printError());
        }
        setMedia(type);
        if (ready) setRequested(false);

    }

    function youtubeTrailer(title, type, year){
        const str = replaceSpaceWithPlus(replaceSpecialCharacters(title) + ' ' + type + ' ' + year);
        window.open('https://www.youtube.com/results?search_query=' + str, '_blank').focus();
    }

    function cardGen(type){
        return <div className='movie-card-grid'>
            {type.map(item => {
                const s = paraMatch(item, tag);
                return <div key={s.id}>
                <Card className='movie-card'>
                    <Card.Img onClick={() => youtubeTrailer(s.title, media, s.year)} variant="top" src={s.img} />
                    <Card.Body>
                        <Card.Title>{replaceSpecialCharacters(s.title)}</Card.Title>
                        <Card.Text>
                            {replaceSpecialCharacters(s.desc)}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>IMBD Rating: {s.rating}</ListGroup.Item>
                        <ListGroup.Item>Year: {s.year}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>})}
        </div>
    }

    return(
        <div className='filter-platform'>
            <h1>Search Best show on {tag.toUpperCase()}</h1>
            <button onClick={() => click('series')}>Series</button>
            <button onClick={() => click('movies')}>Movies</button>
            {requested && <p>please wait</p>}
            {
                (media === 'series' && ready) &&
                <>
                    <div>
                        <p>Series List</p>
                        {cardGen(series)}
                    </div>
                </>
            }
            {
                (media === 'movies' && ready) && <>
                    <div>
                        <p>Movies List</p>
                        {cardGen(movies)}
                    </div>
                </>
            }
            <div id='media-error'/>
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