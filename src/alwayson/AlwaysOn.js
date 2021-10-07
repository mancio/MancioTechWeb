import React, {useEffect, useState} from 'react'
import ReactPlayer from 'react-player'
import './AlwaysOn.css';

export default function AlwaysOn(){

    const [visible, setVisible] = useState(true);

    const [hide, setHide] = useState(false);
    const [button, setButton] = useState('Hide Text!');

    function minimize(){
        if (hide) {
            setHide(false);
            setButton('Hide Text!');
        }else{
            setHide(true);
            setButton('Back');
        }
    }

    useEffect(()=>{
        if(visible){
            setTimeout(()=>{
                setVisible(false);
            },10000);
        }else {
            setTimeout(()=>{
                setVisible(true);
            },200);
        }
    },[visible]);

    return(
        <div className='always-on'>
            <button className='hide-text-always-on' onClick={minimize}>{button}</button>
            {!hide &&
                <>
                    <h1>Keep this page open to keep the display always on</h1>
                    <p>
                    You know.... sometimes bad people want to control the behavior of the display of your PC.
                    If the world turn your display will stay on.
                    </p>
                </>
            }
            {visible &&
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
            {!visible &&
                <div>
                    <p>Loading</p>
                </div>
            }
        </div>
    )
}