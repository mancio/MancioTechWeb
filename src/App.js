import React from 'react';
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
          <React.Suspense fallback={<Loading/>}>
            <Router>
              <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route path='/menu' component={ButtonList}/>
                <Route path='/design' component={SiteDesign}/>
                <Route path='/mystory' component={MyStory}/>
                <Route path='/gamelist' component={GameList}/>
                <Route path='/play/:tag' component={GameFrame}/>
                <Route path='/webcams/:tag' component={WebCamOfTheDay}/>
                <Route path='/boo' component={WorkInProgress}/>
              </Switch>
            </Router>
          </React.Suspense>
        </div>
    )
  }

}

export default App;
