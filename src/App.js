import './App.css';
import Pacman from "./mainpage/pacman/Pacman";
import Title from "./mainpage/title/Title";
import Enter from "./mainpage/enter/Enter";
import ButtonList from "./menu/ButtonList";
import React from 'react';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = ({page: 'index'});
    this.returnState = this.returnState.bind(this);
  }

  returnState(st){
    this.setState({page: st});
  }

  render() {
      const pageChange = () => {
        console.log('current state: ' + this.state.page);
        switch (this.state.page) {
          case 'index':
            return <div><Title/> <Pacman/> <Enter returnState={this.returnState}/></div>
          case 'menu':
            return <ButtonList returnState={this.returnState}/>
          case 'back':
            return <div><Title/> <Pacman/> <Enter returnState={this.returnState}/></div>

        }
      }

    return (
        <div className="App App-main-container">
          {pageChange()}
        </div>
    )
  }

}

export default App;
