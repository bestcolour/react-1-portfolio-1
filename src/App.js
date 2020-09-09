import React from "react";

//Components
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/PageModules/NavBar";
import LandingPage from "./Components/PageModules/LandingPage";

//Data
import data from "./Data";

function App()
{
  return (

    <div>
      <NavBar
        linksArray= {data.navData.linksArray}
        namesArray={data.navData.namesArray}
        appearRange={data.navData.appearRange}
      />

      <Switch>

        <Route exact path="/">  <LandingPage /></Route>



      </Switch>

    </div>
  );
}

export default App;
