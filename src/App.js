import React from "react";
//Components
import LandingPage from "./Components/PageModules/LandingPage";
import style from "./App.module.css";
//Data
import data from "./Data";

function App()
{
  return (
    <div>
      <LandingPage key="landingPage" data={data.landingPageData} />
    </div>
  );
}

export default App;
