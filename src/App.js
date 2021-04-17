
import './App.css';
import Pacman from "./mainpage/pacman/Pacman";
import Title from "./mainpage/title/Title";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Title></Title>
      <Pacman></Pacman>
      </header>
    </div>
  );
}

export default App;
