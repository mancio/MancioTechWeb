import React from 'react'
import ReactPlayer from 'react-player'
import './AlwaysOn.css';

export default function AlwaysOn(){
    return(
        <div className='always-on'>
            <h1>Keep this page open to keep the display always on</h1>
            <p>You know.... sometimes bad people want to control the behavior of the display of your PC</p>
            <div className='player-wrapper-always-on'>
                <ReactPlayer
                    className='react-player-always-on'
                    url='https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4'
                    width='100%'
                    height='100%'
                    playing={true}
                    loop={true}
                    controls={false}
                />
            </div>
        </div>
    )
}