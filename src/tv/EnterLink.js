import ButtonTemplate from "../menu/ButtonTemplate";
import React, {useState} from "react";
import {getMenuItemByTag} from "../menu/MenuHandler";
import './Enterlink.css';
import {useHistory} from "react-router-dom";
import {setParsedFileTvList, setParsedTvList} from "./ParsingHandler";

export default function EnterLink(){

    const back = getMenuItemByTag('back');
    const history = useHistory();

    const [url, setUrl] = useState('');
    const [file, setFile] = useState(null);

    function sendLink(e){
        e.preventDefault();
        setParsedTvList(url)
            .then(() => history.push('/watchTv'))
            .catch(() => window.alert("something got wrong"));
    }

    function sendFile(e){
        e.preventDefault();
        setParsedFileTvList(file)
            .then(() => history.push('/watchTv'))
            .catch(() => window.alert("something got wrong"));
    }

    function urlState(e){
        setUrl(e.target.value);
    }

    function fileState(e){
        setFile(e.target.files[0]);
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
                <form onSubmit={sendFile}>
                    <label>Enter file</label>
                    <input type="file" name="file" onChange={fileState} required/>
                    <input type="submit" value="Play" />
                </form>
            </div>
            <p>
                Remember! the link cannot be protected with password and must be LEGAL and a text file like this
                <a href='https://github.com/iptv-org/iptv/tree/master/channels' target="_blank" rel="noreferrer">
                    https://github.com/iptv-org/iptv/tree/master/channels
                </a>
            </p>
            <p>
                Or choose the country and get one tv
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