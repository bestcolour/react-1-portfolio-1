import React from "react";
//Components
import { Switch, Route } from "react-router-dom";
import LandingPage from "./Components/PageModules/LandingPage";

//Data
import data from "./Data";

function App()
{
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LandingPage key="landingPage" data={data.landingPageData} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
