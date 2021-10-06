import './AlwaysOn.css';
import { useKeepAwake } from '@sayem314/react-native-keep-awake';

export default function AlwaysOn(){
    useKeepAwake();
    return(
        <div className='always-on'>
            <h1>Keep this page open to keep the display always on</h1>
            <p>You know.... sometimes bad people want to control the behavior of the display of your PC</p>
        </div>
    )
}