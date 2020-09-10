import React from "react";

//Components
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/PageModules/NavBar";
import Intro from "./Components/PageModules/Intro";

//Data
import data from "./Data";

function App() {
  console.log(window.location.hostname);

  return (
    <div>
      <NavBar key="ridOfConsoleError" data={data.navData} />

      <Switch>
        <Route exact path="/">
          <Intro />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
