import React from "react";

//CSS Imports
import style from "./LandingPage.module.css";
import commonStyle from "../pageMod.module.css";

function getSunsetBg()
{
  const hours = new Date().getHours();
  return hours >= 7 && hours < 19
    ? "/Images/Backgrounds/DayBackground.png"
    : "/Images/Backgrounds/NightBackground.png";
}

export default function LandingPage()
{

var imgStyle = 
{
  backgroundImage: `url(${getSunsetBg()})`,
  backgroundColor: "#cccccc"
}

  return (

    <div>
      <header 
      className={`${commonStyle.col12}`}
      style = {imgStyle}
      id = {style.header}
      >
 
  </header>

    </div>

  );
}
