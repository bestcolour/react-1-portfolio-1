import React from "react";

//Components
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/PageModules/NavBar";
import LandingPage from "./Components/PageModules/LandingPage";

//Data
import data from "./Data";


function determineNavData()
{
  const pathName = window.location.pathname;
  console.log(pathName);
  switch (pathName)
  {
    //for now landing page will be portfolio
      case "/":
      return data.navData.landPageNavBarData;
  }
}

function App()
{
  return (
    <div>

      <NavBar key="navBar" data={determineNavData()} />
      <Switch>
        <Route exact path="/">
          <div> <LandingPage key="landingPage" data={data.landingPageData} /></div>
        </Route>

         <Route exact path="/">
          <div> <LandingPage key="landingPage" data={data.landingPageData} /></div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
