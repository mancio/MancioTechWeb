import './Designelement.css'
import Designlogo from "./Designlogo";
import Designbutton from "./Designbutton";

function Designelement(){
    return(
        <div className='designelement'>
            <Designlogo/>
            <Designbutton/>
        </div>
    )
}

export default Designelement;