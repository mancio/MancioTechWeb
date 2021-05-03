
import './App.css';
import Pacman from "./mainpage/pacman/Pacman";
import Title from "./mainpage/title/Title";
import Enter from "./mainpage/enter/Enter";
import ButtonList from "./menu/ButtonList";
import React from 'react';

class App extends React.Component{

  mounted = false;

  constructor(props) {
    super(props);
    this.clickEnter = this.clickEnter.bind(this);
    this.chooseMenu = this.chooseMenu.bind(this);
    this.state = {page: 'index'};

  }

  componentDidMount() {
    this.mounted = true;
  }

  clickEnter(){
    console.log('set menu');
    this.setState({page: 'menu'});
  }

  chooseMenu(id){
    console.log('menu number: ' + id);
    switch (id){
      case 0:
        this.setState({page: 'design'});
        break;
      case 1:
        this.setState({page:'story'});
        break;
      case 2:
        this.setState({page: 'project'});
        break;
      case 3:
        this.setState({page: 'contact'});
        break;
      case 4:
        this.setState({page: 'back'});
        break;
      default:
        this.setState({page: 'menu'});
        break;
    }
  }

  render() {

    return (
        <div className="App App-main-container">
          {this.state.page === 'index' && <> <Title/> <Pacman/> <Enter clickEnter={this.clickEnter}/> </>}
          {this.state.page === 'menu' && <ButtonList/>}
        </div>
    );
  }

}

export default App;
