import CookieConsent from "react-cookie-consent";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Loading from "./loading/Loading";
const WatchTv = React.lazy( () => import("./tv/WatchTv"));
const Intro = React.lazy(() => import("./trivial/Intro"));
const ContactMe = React.lazy(() => import("./contact/ContactMe"));
const MainPage = React.lazy(() => import("./mainpage/MainPage"));
const ButtonList = React.lazy(() => import("./menu/ButtonList"));
const SiteDesign = React.lazy(() => import("./sitedesign/SiteDesign"));
const MyStory = React.lazy(() => import("./mystory/MyStory"));
const GameList = React.lazy(() => import("./game/GameList"));
const GameFrame = React.lazy(() => import("./game/GameFrame"));
const WebCamOfTheDay = React.lazy(() => import("./webcam/WebCamOfTheDay"));
const WorkInProgress = React.lazy(() => import("./inprogress/WorkInProgress"));
const EnterLink = React.lazy(() => import("./tv/EnterLink"));
const Platform = React.lazy(() => import("./series/Platform"));
const Weather = React.lazy(() => import("./weather/Weather"));
const Recipes = React.lazy(() => import("./recipes/Recipes"));
const SingleRecipe = React.lazy(() => import("./recipes/SingleRecipe"));
const Fart = React.lazy(() => import("./fart/Farts"));
const NotFound = React.lazy( () => import('./notfound/NotFound'));
const AlwaysOn = React.lazy( () => import('./alwayson/AlwaysOn'));

class App extends React.Component{

  render() {
    return(
        <div className="App App-main-container">
          <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
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
                <Route path='/filmseries/selectplatform' component={Platform}/>
                <Route path='/enterTvLink' component={EnterLink}/>
                <Route path='/watchTv' component={WatchTv}/>
                <Route path='/weather' component={Weather}/>
                <Route path='/trivial' component={Intro}/>
                <Route path='/recipes' component={Recipes}/>
                <Route path='/recipe/:tag' component={SingleRecipe}/>
                <Route path='/fartIsFun' component={Fart}/>
                <Route path='/alwaysOn' component={AlwaysOn}/>
                <Route path='/boo' component={WorkInProgress}/>
                <Route component={NotFound}/>
              </Switch>
            </Router>
          </React.Suspense>
        </div>
    )
  }

}

export default App;
