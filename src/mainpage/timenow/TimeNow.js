import React  from 'react';
import Moment from 'react-moment';
import './TimeNow.css';

export default class TimeNow extends React.Component {
    render() {
        const fullFormat = 'dddd DD MMMM(MM) YYYY';
        const time = 'HH:mm:ss';
        const updateTime = 1000; // one second
        const updateDay = 24 * 60 * 60 * 1000; // 24 hours
        return (
            <div className='time-date'>
                <p>
                    <Moment local format={fullFormat} interval={updateDay}/>
                    <br/>
                    Time: <Moment local format={time} interval={updateTime}/>
                </p>
            </div>
        );
    }
}