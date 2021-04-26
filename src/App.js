
import './App.css';
import Pacman from "./mainpage/pacman/Pacman";
import Title from "./mainpage/title/Title";
import Enter from "./mainpage/enter/Enter";
import ButtonList from "./menu/ButtonList";

function App() {
  return (
    <div className="App App-main-container">
        <Title/>
        <Pacman/>
        <Enter/>
        <ButtonList/>
    </div>
  );
}

export default App;
