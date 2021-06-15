import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";
import {getParsedTvList, getTvUrlByIndex} from "./ParsingHandler";
import {useEffect, useRef, useState} from "react";
import './WatchTv.css';
import ReactPlayer from 'react-player'

export default function WatchTv(){

    const back = getMenuItemByTag('back');
    const [tvList, setTvList] = useState([]);
    const [url,setUrl] = useState('');
    const [tvName, setTvName] = useState('');

    let currentList;

    useEffect(() => {
        currentList = getParsedTvList();
        setTvList(currentList);
    },currentList);

    let id = -1;

    function changeUrl(id, name){
        setUrl(getTvUrlByIndex(id));
        setTvName(name);
    }

    return(
        <div>
            <div>
                <p>
                    NOTE: Some tv channels can require VPN to be watched
                    outside your country
                </p>
            </div>
            <div className='tv-frame'>
                <div className='channel-list'>
                    <table>
                        <tbody>
                            {tvList.map(el => {
                                id++;
                                const currentId = id;
                                const tvName = el.name;
                                return(
                                    <tr id={currentId} key={currentId}>
                                        <td>
                                            <button className='tv-name-button' onClick={() => changeUrl(currentId, tvName)}>
                                                <p>{tvName}</p>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='tv-video-frame'>
                    <ReactPlayer
                        url = {url}
                        width = '700px'
                        height = '500px'
                        controls = {true}
                        playing = {true}
                    />
                    <p>{tvName}</p>
                </div>
            </div>
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
                tag='tv'
            />
        </div>
    )
}