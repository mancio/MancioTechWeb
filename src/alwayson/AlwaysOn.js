import React, {useEffect, useState} from 'react'
import ReactPlayer from 'react-player'
import './AlwaysOn.css';
import {getRandEmoticons} from "./AlwaysOnHandler";

export default function AlwaysOn(){

    const [visible, setVisible] = useState(true);
    const [hide, setHide] = useState(false);
    const [button, setButton] = useState('Hide Text!');
    const [play, setPlay] = useState(false);

    function minimize(){
        if (hide) {
            setHide(false);
            setButton('Hide Text!');
        }else{
            setHide(true);
            setPlay(true);
            setButton('Back');
        }
    }

    function run(){
        /*
            Is not doing anything special. Due to a browser bug the user must
            click somewhere to start the video.
         */
        setPlay(true);
        setVisible(false);
    }

    useEffect(()=>{
        if(visible) setTimeout(()=>{ setVisible(false)},10000);
        else setTimeout(()=>{ setVisible(true)},500);
        return () => clearTimeout();
    },[visible]);

    return(
        <div className='always-on'>
            {!play && <button onClick={run} className='click-always-on'>Click to start!</button>}
            {play && <button className='hide-text-always-on' onClick={minimize}>{button}</button>}
            {!hide && play &&
                <>
                    <p>Keep this page open to keep the display always on</p>
                    <p>If the world turn your device will not fall asleep</p>
                </>
            }
            {visible && play &&
                <div className={!hide ? 'player-wrapper-always-on': 'player-wrapper-always-on-small'}>
                    <ReactPlayer
                        className='react-player-always-on'
                        url='https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4'
                        width='100%'
                        height='100%'
                        playing={true}
                        loop={true}
                        controls={false}
                        pip={false}
                    />
                </div>
            }
            {!visible && play &&
                <div className='alwayson-emoti'>
                    <p>{getRandEmoticons()}</p>
                </div>
            }
        </div>
    )
}