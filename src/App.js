
import './App.css';
import Pacman from "./mainpage/pacman/Pacman";
import Title from "./mainpage/title/Title";
import Enter from "./mainpage/enter/Enter";
import Designelement from "./menu/sitedesign/Designelement";

function App() {
  return (
    <div className="App">
      <div className="App-main-container">
        <Title/>
        <Pacman/>
        <Enter/>
        <Designelement/>
      </div>
    </div>
  );
}

export default App;
