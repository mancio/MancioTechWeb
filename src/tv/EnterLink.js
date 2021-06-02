import ButtonTemplate from "../menu/ButtonTemplate";
import React, {useState} from "react";
import {getMenuItemByTag} from "../menu/MenuHandler";
import './Enterlink.css';
import {useHistory} from "react-router-dom";
import {setParsedTvList} from "./ParsingHandler";

export default function EnterLink(){

    const back = getMenuItemByTag('back');
    const history = useHistory();

    const [url, setUrl] = useState('');

    function sendLink(e){
        e.preventDefault();
        console.log(url);
        setParsedTvList(url)
            .then(() => history.push('/watchTv'))
            .catch(() => window.alert("something got wrong"));
    }

    function urlState(e){
        setUrl(e.target.value);
    }

    return(
        <div>
            <h1> Welcome in the media player </h1>
            <p> Here you can play your media </p>
            <p> Just add the link or file and push the button </p>
            <p> Supported format: .m3u</p>
            <div className='tv-form'>
                <form onSubmit={sendLink}>
                    <label>Enter link</label>
                    <input type="url" name="url" value={url} onChange={urlState} placeholder='http://' required/>
                    <input type="submit" value="Play" />
                </form>
                <form>
                    <label>Enter file</label>
                    <input type="file" name="file" required/>
                    <input type="submit" value="Play" />
                </form>
            </div>
            <p>
                Remember! the link cannot be protected with pass and must be a text file like this
                <a href='https://github.com/iptv-org/iptv/tree/master/channels' target="_blank" rel="noreferrer">
                    https://github.com/iptv-org/iptv/tree/master/channels
                </a>
            </p>
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
                tag='menu'
            />
        </div>
    )
}