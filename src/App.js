import './App.css';
import Pacman from "./mainpage/pacman/Pacman";
import Title from "./mainpage/title/Title";
import Enter from "./mainpage/enter/Enter";
import ButtonList from "./menu/ButtonList";
import React from 'react';
import MyStory from "./mystory/MyStory";
import WorkInProgress from "./inprogress/WorkInProgress";
import GameList from "./game/GameList";
import GameFrame from "./game/GameFrame";
import SiteDesign from "./sitedesign/SiteDesign";
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
          case 'design':
            return <SiteDesign returnState={this.returnState}/>
          case 'story':
            return <MyStory returnState={this.returnState}/>
          case 'game':
            return <GameList returnState={this.returnState}/>
          case 'back':
            return <ButtonList returnState={this.returnState}/>
          // Games
          case 'metal':
          case 'marioKart':
          case 'tk3':
            return <GameFrame returnState={this.returnState} gameTag={this.state.page}/>
          // default (unpredicted, not designed yet)
          default:
            return <div><WorkInProgress returnState={this.returnState}/></div>

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
