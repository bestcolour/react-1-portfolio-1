import React from "react";
import Header from "./Components/CommonPage/Header.js";
import NavBar from "./Components/CommonPage/NavBar.js";
import AboutMe from "./Components/CommonPage/AboutMe.js";

function App() {
  return (
    <div>
      <NavBar
        data={{
          linksArray: ["#", "https://Google.com", "https://Google.com"],
          namesArray: ["Home", "Google", "Google"],
          appearRange: [{ min: 0, max: 1 }]
        }}
      />

      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
