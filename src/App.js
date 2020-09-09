import React from "react";

//Components
import { Switch, Route } from "react-router-dom";
import NewHeader from "./Components/PageModules/NewHeader";
import LandingPage from "./Components/PageModules/LandingPage";

//Data
import data from "./Data";

function App()
{
  console.log(window.location.hostname);

  return (

    <div>


      <NewHeader
        key = "ridOfConsoleError"
        data={data.navData}
      />

      <Switch>
        <Route exact path="/"><LandingPage /></Route>
      </Switch>

    </div>
  );
}

export default App;
