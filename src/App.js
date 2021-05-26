import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Loading from "./loading/Loading";
import ContactMe from "./contact/ContactMe";
import MainPage from "./mainpage/MainPage";
import ButtonList from "./menu/ButtonList";
import SiteDesign from "./sitedesign/SiteDesign";
import MyStory from "./mystory/MyStory";
import GameList from "./game/GameList";
import GameFrame from "./game/GameFrame";
import WebCamOfTheDay from "./webcam/WebCamOfTheDay";
import WorkInProgress from "./inprogress/WorkInProgress";
import EnterLink from "./tv/EnterLink";

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
                <Route path='/contact' component={ContactMe}/>
                <Route path='/gamelist' component={GameList}/>
                <Route path='/play/:tag' component={GameFrame}/>
                <Route path='/webcams/:tag' component={WebCamOfTheDay}/>
                <Route path='/tv' component={EnterLink}/>
                <Route path='/boo' component={WorkInProgress}/>
              </Switch>
            </Router>
          </React.Suspense>
        </div>
    )
  }

}

export default App;
