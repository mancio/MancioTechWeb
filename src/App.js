
import './App.css';
import Pacman from "./mainpage/pacman/Pacman";
import Title from "./mainpage/title/Title";
import Enter from "./mainpage/enter/Enter";

function App() {
  return (
    <div className="App">
      <header className="App-main-container">
        <Title/>
        <Pacman/>
        <Enter/>
      </header>
    </div>
  );
}

export default App;
