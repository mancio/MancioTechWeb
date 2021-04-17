import logo from "./Pacman.svg";
import './Pacman.css';

function Pacman(){
    return(
        <div>
            <img src={logo} className="Pacman" alt="Pacman!" />
        </div>
    );
}

export default Pacman;