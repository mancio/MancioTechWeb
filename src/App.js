import React from 'react';
import {Suspense} from "react";
import './App.css';
import Loading from "./loading/Loading";
// import MainPage from "./mainpage/MainPage";
//import ButtonList from "./menu/ButtonList";
//import SiteDesign from "./sitedesign/SiteDesign";
//import MyStory from "./mystory/MyStory";
//import GameList from "./game/GameList";
//import WebCamOfTheDay from "./webcam/WebCamOfTheDay";
//import GameFrame from "./game/GameFrame";
//import WorkInProgress from "./inprogress/WorkInProgress";

const MainPage = React.lazy(() => import("./mainpage/MainPage"))
const ButtonList = React.lazy(() => import("./menu/ButtonList"));
const SiteDesign = React.lazy(() => import("./sitedesign/SiteDesign"));
const MyStory = React.lazy(() => import("./mystory/MyStory"));
const GameList = React.lazy(() => import("./game/GameList"));
const WebCamOfTheDay = React.lazy(() => import("./webcam/WebCamOfTheDay"));
const GameFrame = React.lazy(() => import("./game/GameFrame"));
const WorkInProgress = React.lazy(() => import("./inprogress/WorkInProgress"));


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
            return <Suspense fallback={<Loading/>}> <MainPage returnState={this.returnState}/> </Suspense>
          case 'menu':
            return <Suspense fallback={<Loading/>}> <ButtonList returnState={this.returnState}/> </Suspense>
          case 'design':
            return <Suspense fallback={<Loading/>}> <SiteDesign returnState={this.returnState}/> </Suspense>
          case 'story':
            return <Suspense fallback={<Loading/>}> <MyStory returnState={this.returnState}/> </Suspense>
          case 'game':
            return <Suspense fallback={<Loading/>}><GameList returnState={this.returnState}/> </Suspense>
          case 'cam':
            return <Suspense fallback={<Loading/>}><WebCamOfTheDay returnState={this.returnState}/> </Suspense>
          case 'back':
            return <Suspense fallback={<Loading/>}> <ButtonList returnState={this.returnState}/> </Suspense>
          // Games
          case 'play':
            return <Suspense fallback={<Loading/>}> <GameFrame returnState={this.returnState} /> </Suspense>
          // default (unpredicted, not designed yet)
          default:
            return <Suspense fallback={<Loading/>}> <WorkInProgress returnState={this.returnState}/> </Suspense>
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
