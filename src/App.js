import React from 'react';
import {Suspense} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

  render() {
    return(
        <div className="App App-main-container">
          <Router>
            <Switch>
              <Route exact path='/'>
                <Suspense fallback={<Loading/>}> <MainPage/> </Suspense>
              </Route>
              <Route path='/menu'>
                <Suspense fallback={<Loading/>}> <ButtonList/> </Suspense>
              </Route>
              <Route path='/design'>
                <Suspense fallback={<Loading/>}> <SiteDesign/> </Suspense>
              </Route>
              <Route path='/mystory'>
                <Suspense fallback={<Loading/>}> <MyStory/> </Suspense>
              </Route>
              <Route path='/gamelist'>
                <Suspense fallback={<Loading/>}><GameList/> </Suspense>
              </Route>
              <Route path='/play/:tag'>
                <Suspense fallback={<Loading/>}> <GameFrame/> </Suspense>
              </Route>
              <Route path='/webcams'>
                <Suspense fallback={<Loading/>}><WebCamOfTheDay/> </Suspense>
              </Route>
              <Route path='/boo'>
                <Suspense fallback={<Loading/>}> <WorkInProgress/> </Suspense>
              </Route>
            </Switch>
          </Router>
        </div>
    )
  }

}

export default App;
